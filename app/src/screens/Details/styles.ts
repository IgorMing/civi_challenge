import styled from 'styled-components/native';
import Text from '~/components/Text';

export default {
  Container: styled.ScrollView``,
  HorizontalBlock: styled.View`
    flex-direction: row;
    align-items: center;
    padding: 20px 20px 0;
  `,
  VerticalBlock: styled.View`
    flex-direction: column;
    align-items: flex-start;
    padding: 20px 20px;
  `,
  DateText: styled(Text)`
    font-size: 18px;
  `,
  Text: styled(Text)`
    font-size: 18px;
    text-align: justify;
    margin-top: 10px;
    line-height: 22px;
  `,
  Label: styled(Text)`
    font-size: 20px;
    font-weight: bold;
    margin-right: 5px;
  `
};
