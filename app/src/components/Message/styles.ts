import styled from 'styled-components/native';
import Text from '../Text';
import { MessageStyleProps } from './types';

export default {
  Touchable: styled.TouchableOpacity<MessageStyleProps>`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 25px 20px;
    border-bottom-width: 1px;
    border-bottom-color: lightgray;
    background-color: ${({ read }) => (read ? '#aaaaaa22' : 'white')};
  `,
  Block: styled.View`
    flex-direction: row;
    align-items: center;
  `,
  Title: styled(Text)<MessageStyleProps>`
    font-weight: ${({ read }) => (read ? 'normal' : 'bold')};
    font-size: 20px;
    padding-left: 15px;
  `,
  Date: styled(Text)`
    font-size: 16px;
  `
};
