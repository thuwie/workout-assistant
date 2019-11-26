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
EXPOSE 8089
CMD [ "npm", "start" ]
