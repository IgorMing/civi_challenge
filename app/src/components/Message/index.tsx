import React from 'react';
import Styled from './styles';
import { MessageProps } from './types';

const Message: React.FC<MessageProps> = (props) => {
  const { read } = props;
  const date = 1603256456078;

  return (
    <Styled.Touchable onPress={props.onClick} read={read}>
      <Styled.Title read={read}>Message A</Styled.Title>
      <Styled.Date>{date}</Styled.Date>
    </Styled.Touchable>
  );
};

Message.defaultProps = {
  read: false
};

export default Message;
