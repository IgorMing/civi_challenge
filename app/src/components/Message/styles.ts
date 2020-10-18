import styled from 'styled-components/native';
import { MessageStyleProps } from './types';

export default {
  Touchable: styled.TouchableOpacity<MessageStyleProps>`
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 25px 20px;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
    opacity: ${({ read }) => (read ? '0.4' : '1')};
  `,
  Title: styled.Text<MessageStyleProps>`
    font-weight: ${({ read }) => (read ? 'normal' : 'bold')};
    font-size: 20px;
  `,
  Date: styled.Text`
    font-size: 16px;

    align-self: flex-end;
  `
};