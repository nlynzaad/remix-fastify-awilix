# Remix-Fastify-Awilix
Simple example of a [Remix](https://remix.run/) application using [Vite](https://vitejs.dev), [fastify](https://fastify.dev) and [Awilix](https://github.com/jeffijoe/awilix)

The following extensions are used:
1) To run a Remix application using a fastify server: [remix-fastify](https://github.com/mcansh/remix-fastify)
2) To attach a scoped awilix container to the fastify request: [fastify-awilix](https://github.com/fastify/fastify-awilix)

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

Then run the app in production mode:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `npm run build`

- `build/server`
- `build/client`
