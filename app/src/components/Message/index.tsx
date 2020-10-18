import React from 'react';
import Styled from './styles';
import { MessageProps } from './types';
import { format, isToday } from 'date-fns';
import en from 'date-fns/locale/en-US';

const Message: React.FC<MessageProps> = (props) => {
  const { read } = props;
  //   const date = 1603060843233; // hoje
  const date = 1584500400000;
  const formatMask = isToday(date) ? 'HH:mm' : 'MM/dd/yyyy HH:mm';
  const formatted = format(date, formatMask, {
    locale: en
  });

  return (
    <Styled.Touchable onPress={props.onClick} read={read}>
      <Styled.Title read={read}>Message A</Styled.Title>
      <Styled.Date>{formatted}</Styled.Date>
    </Styled.Touchable>
  );
};

Message.defaultProps = {
  read: false
};

export default Message;
