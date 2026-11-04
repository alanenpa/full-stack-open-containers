FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "dev"]