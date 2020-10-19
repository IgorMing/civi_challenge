import React from 'react';
import Styled from './styles';
import { DetailsProps } from './types';

const Details: React.FC<DetailsProps> = ({ route }) => {
  const { id } = route.params;
  return (
    <Styled.Container>
      <Styled.Text>Details screen. ID: {id}</Styled.Text>
    </Styled.Container>
  );
};

export default Details;
