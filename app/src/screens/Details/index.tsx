import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import http from '~/commons/http';
import { Message } from '~/commons/types';
import { Spinner } from '~/components';
import Styled from './styles';
import { DetailsProps } from './types';

const Details: React.FC<DetailsProps> = ({ route }) => {
  const [data, setData] = useState<Message | null>(null);
  const { id } = route.params;

  useEffect(() => {
    async function fetch() {
      const response = await http.get(`/messages/${id}`);
      setData(response.data);
    }

    fetch();
  }, [id]);

  if (data === null) {
    return <Spinner />;
  }

  const { timestamp, detail } = data;

  return (
    <Styled.Container>
      <Styled.HorizontalBlock>
        <Styled.Label>Received at:</Styled.Label>
        <Styled.DateText>
          {format(timestamp, 'MM-dd-yyyy HH:mm')}
        </Styled.DateText>
      </Styled.HorizontalBlock>
      <Styled.VerticalBlock>
        <Styled.Label>Message:</Styled.Label>
        <Styled.Text>{detail}</Styled.Text>
      </Styled.VerticalBlock>
    </Styled.Container>
  );
};

export default Details;
