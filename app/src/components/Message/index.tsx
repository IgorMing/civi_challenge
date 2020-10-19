import { format, isToday } from 'date-fns';
import React from 'react';
import Styled from './styles';
import { MessageProps } from './types';
import Icon from 'react-native-vector-icons/Ionicons';

const Message: React.FC<MessageProps> = (props) => {
  const { id, onClick, read, subject, timestamp: date } = props;
  const formatMask = isToday(date) ? 'HH:mm' : 'MM-dd-yyyy HH:mm';
  const formatted = format(date, formatMask);
  const iconName = read ? 'md-mail-open-outline' : 'md-mail-outline';

  function onPress() {
    onClick(id, subject);
  }

  return (
    <Styled.Touchable onPress={onPress} read={read}>
      <Styled.Block>
        <Icon name={iconName} size={25} />
        <Styled.Title read={read} numberOfLines={1}>
          {subject}
        </Styled.Title>
      </Styled.Block>
      <Styled.Date>{formatted}</Styled.Date>
    </Styled.Touchable>
  );
};

Message.defaultProps = {
  read: false
};

export default Message;
