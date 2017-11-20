FROM nodesource/trusty:4.4.7

WORKDIR /kaleo-codes
COPY package.json package.json
COPY index.js index.js
COPY ./ /kaleo-codes

RUN npm install

ENTRYPOINT ["npm", "start"]

