export interface Message {
  id: string;
  timestamp: number;
  subject: string;
  detail?: string;
}
