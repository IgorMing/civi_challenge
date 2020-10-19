import { Platform } from 'react-native';
import styled from 'styled-components/native';

export default styled.Text`
  font-family: ${Platform.select({
    ios: 'Arial',
    android: 'Roboto'
  })};
`;
