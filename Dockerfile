FROM node:14

WORKDIR /server

COPY package*.json dist .env prisma ./

CMD [ "npm", "start" ]
