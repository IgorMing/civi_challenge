import { format, isToday } from 'date-fns';
import en from 'date-fns/locale/en-US';
import React from 'react';
import Styled from './styles';
import { MessageProps } from './types';

const Message: React.FC<MessageProps> = (props) => {
  const { id, onClick, read, subject, timestamp: date } = props;
  const formatMask = isToday(date) ? 'HH:mm' : 'MM-dd-yyyy HH:mm';
  const formatted = format(date, formatMask, {
    locale: en
  });

  function onPress() {
    onClick(id);
  }

  return (
    <Styled.Touchable onPress={onPress} read={read}>
      <Styled.Title read={read}>{subject}</Styled.Title>
      <Styled.Date>{formatted}</Styled.Date>
    </Styled.Touchable>
  );
};

Message.defaultProps = {
  read: false
};

export default Message;
