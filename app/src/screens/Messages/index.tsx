import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Message from '~/components/Message';
import Styled from './styles';

const Messages: React.FC = () => {
  const navigation = useNavigation();

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
