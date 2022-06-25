FROM node:14.17 as builder

WORKDIR '/app'

COPY package.json package-lock.json ./

RUN npm install --frozen-lockfile 

COPY . .

RUN npm run build


FROM nginx:latest

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html

