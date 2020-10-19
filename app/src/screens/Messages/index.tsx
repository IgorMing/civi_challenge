import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useReducer, useState } from 'react';
import { RefreshControl } from 'react-native';
import http from '~/commons/http';
import { Message as MessageProps } from '~/commons/types';
import Message from '~/components/Message';
import reducer, { INITIAL_STATE, setData } from './duck';
import { orderedData } from './seletors';
import Styled from './styles';

const Messages: React.FC = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const orderedList = orderedData(state);

  async function fetch(addNew = false) {
    try {
      const response = await http.get(`/messages?new=${addNew ? '1' : '0'}`);
      dispatch(setData(response.data));
    } catch (err) {
      console.error(err);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetch();
    }, [])
  );

  async function onMessageClick(id: string, title: string) {
    await http.patch(`/messages/${id}`);
    navigation.navigate('Details', { id, title });
  }

  async function onRefresh() {
    setRefreshing(true);
    await fetch(true);
    setRefreshing(false);
  }

  return (
    <Styled.Container>
      <Styled.Scrollable
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {orderedList.map((message: MessageProps) => (
          <Message key={message.id} onClick={onMessageClick} {...message} />
        ))}
      </Styled.Scrollable>
    </Styled.Container>
  );
};

export default Messages;
