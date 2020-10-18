import { Router } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.get('/messages', async (context) => {
  const data = await Deno.readTextFile('./data.json');
  context.response.status = 200;
  context.response.body = data;
});

export default router;
