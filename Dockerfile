FROM node:11.6.0-alpine
WORKDIR /
COPY main.js /main.js
COPY package.json yarn.lock /
RUN yarn install
EXPOSE 5000
CMD [ "node" , "main.js" ]