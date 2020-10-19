import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useReducer } from 'react';
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

  useEffect(() => {
    async function fetch() {
      try {
        const response = await http.get('/messages');
        dispatch(setData(response.data));
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  function navigate(id: string, title: string) {
    navigation.navigate('Details', { id, title });
  }

  return (
    <Styled.Container>
      <Styled.Scrollable>
        {orderedList.map((message: MessageProps) => (
          <Message onClick={navigate} {...message} />
        ))}
      </Styled.Scrollable>
    </Styled.Container>
  );
};

export default Messages;
