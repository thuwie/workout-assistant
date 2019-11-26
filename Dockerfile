FROM node:10.13.0-alpine

WORKDIR /usr/src/server
COPY package.json .
ADD . /usr/src/server

RUN apk --no-cache --update --virtual build-dependencies add \
    python \
    make \
    g++ \
    && npm install


RUN npm run tsc
COPY /usr/src/server/.env /usr/src/server/dist/.env
EXPOSE 8089
CMD [ "npm", "run", "start:prod" ]
