export interface MessageStyleProps {
  read?: boolean;
}

export interface MessageProps extends MessageStyleProps {
  onClick: () => void;
  subject: string;
  date: number;
}
