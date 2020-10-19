import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { useCallback, useReducer } from 'react';
import http from '~/commons/http';
import { Message as MessageProps } from '~/commons/types';
import Message from '~/components/Message';
import reducer, { INITIAL_STATE, setData } from './duck';
import { orderedData } from './seletors';
import Styled from './styles';

const Messages: React.FC = () => {
  const navigation = useNavigation();
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const orderedList = orderedData(state);

  useFocusEffect(
    useCallback(() => {
      async function fetch() {
        try {
          const response = await http.get('/messages');
          dispatch(setData(response.data));
        } catch (err) {
          console.log(err);
        }
      }

      fetch();
    }, [])
  );

  async function onMessageClick(id: string, title: string) {
    await http.patch(`/messages/${id}`);
    navigation.navigate('Details', { id, title });
  }

  return (
    <Styled.Container>
      <Styled.Scrollable>
        {orderedList.map((message: MessageProps) => (
          <Message key={message.id} onClick={onMessageClick} {...message} />
        ))}
      </Styled.Scrollable>
    </Styled.Container>
  );
};

export default Messages;
