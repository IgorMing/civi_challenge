import { Router } from 'https://deno.land/x/oak/mod.ts';
import { get, getById, setReadById } from './data.ts';
import { Message } from './models/index.ts';

const router = new Router();

router.get('/messages', async (context) => {
  const urlParams = new URLSearchParams(context.request.url.search);
  const addNew = urlParams.get('new');
  console.log('new', addNew);
  const parsedData: Message[] = get(addNew);
  const response = parsedData.map((message) => {
    const instance = { ...message };
    delete instance.detail;
    return instance;
  });

  context.response.status = 200;
  context.response.body = response;
});

router.get('/messages/:id', (context) => {
  const found = getById(context.params.id);

  if (found) {
    context.response.status = 200;
    context.response.body = found;
  } else {
    context.response.status = 404;
    context.response.body = 'not found';
  }
});

router.patch('/messages/:id', (context) => {
  const changedMessage = setReadById(context.params.id);

  if (changedMessage) {
    context.response.status = 200;
    context.response.body = changedMessage;
  } else {
    context.response.status = 400;
    context.response.body = 'not able to update the message';
  }
});

export default router;
