FROM node:14.17

WORKDIR '/app'

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "start"]
