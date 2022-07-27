FROM node:latest

WORKDIR /var/www/app
COPY package*.json ./

RUN npm install
RUN npm uninstall bcrypt
RUN npm i bcrypt
COPY . .

EXPOSE 8080 3001
