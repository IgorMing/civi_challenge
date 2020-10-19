export interface Message {
  id: string; // I left as `string` to be able to use uuid
  timestamp: number;
  subject: string;
  detail?: string;
  read: boolean;
}
