FROM node:6.4

MAINTAINER Julien Smadja <jsmadja@xebia.fr>

RUN mkdir /xebicon
WORKDIR /xebicon

COPY package.json package.json
RUN npm i bluebird
RUN npm i --production

COPY app app

EXPOSE 3000

CMD [ "npm", "start" ]