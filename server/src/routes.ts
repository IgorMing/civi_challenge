import { Router } from 'https://deno.land/x/oak/mod.ts';
import { Message } from './models/index.ts';
import { get, init } from './data.ts';

const router = new Router();

router.get('/messages', async (context) => {
  const parsedData: Message[] = get();
  const response = parsedData.map((message) => {
    const instance = { ...message };
    delete instance.detail;
    return instance;
  });

  context.response.status = 200;
  context.response.body = response;
});

router.get('/messages/:id', (context) => {
  const data = get();
  const found = data.find((message) => message.id === context.params.id);

  if (found) {
    context.response.status = 200;
    context.response.body = found;
  } else {
    context.response.status = 404;
    context.response.body = 'not found';
  }
});

export default router;
