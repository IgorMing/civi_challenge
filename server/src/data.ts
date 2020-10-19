import { v4 } from 'https://deno.land/std/uuid/mod.ts';
import { Message } from './models/index.ts';

const data: Message[] = [];
const defaultDetail =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum';

export function generateMessage(subject: string, timestamp?: number) {
  const uuid = v4.generate();
  const date = timestamp ?? new Date().getTime();

  data.push({
    id: uuid,
    timestamp: date,
    subject: subject,
    detail: defaultDetail,
    read: false
  });
}

export function get() {
  return data;
}

export function getById(id?: string) {
  if (!id) {
    return;
  }

  return data.find((message) => message.id === id);
}

export function setReadById(id?: string) {
  if (!id) {
    return;
  }

  const found = getById(id);

  if (!found) {
    return;
  }

  found.read = true;

  return found;
}

export function init() {
  generateMessage('Message A', 1584500400000);
  generateMessage("Today's message");
  generateMessage('Message B', 1584500399000);
  return data;
}
