FROM node:16-alpine As dependencies

WORKDIR /app


COPY ../../../dist/apps/api .

RUN yarn install

CMD ["node","main"]