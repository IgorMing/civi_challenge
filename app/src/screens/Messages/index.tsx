import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import http from '~/commons/http';
import Message from '~/components/Message';
import Styled from './styles';

const Messages: React.FC = () => {
  const navigation = useNavigation();

  useEffect(() => {
    async function fetch() {
      try {
        const response = await http.get('/messages');
        console.log(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetch();
  }, []);

  function navigate(id: number) {
    navigation.navigate('Details', { id });
  }

  return (
    <Styled.Container>
      <Styled.Scrollable>
        <Message onClick={navigate} />
        <Message />
        <Message />
        <Message />
        <Message read />
      </Styled.Scrollable>
    </Styled.Container>
  );
};

export default Messages;
