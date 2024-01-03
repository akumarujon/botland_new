import { Hono, Context } from "npm:hono";

const app = new Hono();

app.get('/', async(ctx: Context) => {
    return ctx.text((await Deno.readTextFile('./install.sh')))
})

Deno.serve({port: 4000}, app.fetch)