FROM node:lts-alpine

WORKDIR /server

ENV PATH /server/node_modules/.bin:$PATH

COPY . .

RUN npm install && npm install -g nodemon

CMD nodemon
