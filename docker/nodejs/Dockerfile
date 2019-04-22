FROM node:lts as cache

WORKDIR /var/app

ADD . /var/app

RUN yarn install && yarn build

FROM node:10.5.0-alpine

COPY --from=cache /var/app/dist ./dist
COPY --from=cache /var/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/bin/server.js"]
