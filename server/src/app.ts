import { config } from 'https://deno.land/x/dotenv/mod.ts';
import { Application } from 'https://deno.land/x/oak/mod.ts';
import { init } from './data.ts';
import router from './routes.ts';

const HOST = config().HOST;
const PORT = config().PORT;

const app = new Application();

init();

app.use(router.routes());
app.use(router.allowedMethods());

const ADDRESS = `${HOST}:${PORT}`;

console.log(`Deno is running on the address: ${ADDRESS}`);
await app.listen(ADDRESS);
