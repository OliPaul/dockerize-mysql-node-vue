FROM node:lts-alpine

WORKDIR /webapp

ENV PATH /webapp/node_modules/.bin:$PATH

COPY . .

RUN npm install && npm install -g @vue/cli

CMD ["npm", "run", "serve"]
