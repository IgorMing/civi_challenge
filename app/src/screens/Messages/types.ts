import { Message } from '~/commons/types';

export interface MessagesModuleState {
  list: Message[];
}

export interface Action {
  type: string;
  payload?: any;
}
