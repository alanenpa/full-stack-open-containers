FROM node:24

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

# ENV VITE_BACKEND_URL=http://localhost:3000
ENV VITE_BACKEND_URL=http://localhost:8080/api

CMD ["npm", "run", "dev", "--", "--host"]