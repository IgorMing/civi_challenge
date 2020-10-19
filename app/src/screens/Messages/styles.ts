import styled from 'styled-components/native';
import Text from '~/components/Text';

export default {
  Container: styled.SafeAreaView`
    flex: 1;
  `,
  Scrollable: styled.ScrollView``,
  Text: styled(Text)`
    font-size: 22px;
  `
};
