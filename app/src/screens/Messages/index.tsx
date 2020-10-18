import React from 'react';
import Message from '~/components/Message';
import Styled from './styles';

const Messages: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Scrollable>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message read />
      </Styled.Scrollable>
    </Styled.Container>
  );
};

export default Messages;
