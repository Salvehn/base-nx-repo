FROM node:16-alpine
WORKDIR /app
COPY ../../../dist/apps/web .

RUN yarn install

CMD yarn next start -p 3000