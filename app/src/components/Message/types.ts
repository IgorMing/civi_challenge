import { Message } from '~/commons/types';

export interface MessageStyleProps {
  read?: boolean;
}

export interface MessageProps extends MessageStyleProps, Message {
  onClick: (id: string, title: string) => void;
}
