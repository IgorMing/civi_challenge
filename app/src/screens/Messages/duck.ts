import { Message } from '~/commons/types';
import { Action, MessagesModuleState } from './types';

// Actions
const SET = 'MESSAGES/SET';

export const INITIAL_STATE: MessagesModuleState = {
  list: []
};

// Reducer
export default function reducer(state: MessagesModuleState, action: Action) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        list: [...action.payload]
      };
    default:
      return state;
  }
}

// Action Creators
export function setData(data: Message[]): Action {
  return {
    type: SET,
    payload: data
  };
}
