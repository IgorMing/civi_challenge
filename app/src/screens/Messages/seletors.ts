import { compareDesc } from 'date-fns';
import { MessagesModuleState } from './types';

export function orderedData(state: MessagesModuleState) {
  return state.list.sort((a, b) => compareDesc(a.timestamp, b.timestamp));
}
