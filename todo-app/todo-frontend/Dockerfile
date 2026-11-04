FROM node:24 AS test

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

RUN npm run test

FROM test AS build-stage

# ENV VITE_BACKEND_URL=http://localhost:3000
# ENV VITE_BACKEND_URL=http://localhost:8080/api
ARG VITE_BACKEND_URL=/api
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build

# RUN npm install -g serve

# CMD [ "serve", "-n", "dist" ]

FROM nginx:1.29-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html