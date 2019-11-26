FROM node:10.13.0-alpine

WORKDIR /usr/src/server
COPY package.json .
RUN npm install
ADD . /usr/src/server
RUN npm run tsc
EXPOSE 8089
CMD [ "npm", "start" ]
