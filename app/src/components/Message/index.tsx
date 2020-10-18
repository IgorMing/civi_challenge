import React from 'react';
import Styled from './styles';
import { MessageProps } from './types';

const Message: React.FC<MessageProps> = (props) => {
  const { read } = props;

  return (
    <Styled.Touchable read={read}>
      <Styled.Title read={read}>Message A</Styled.Title>
      <Styled.Date>18-03-2020</Styled.Date>
    </Styled.Touchable>
  );
};

Message.defaultProps = {
  read: false
};

export default Message;
