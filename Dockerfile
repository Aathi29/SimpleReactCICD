FROM node:18-alphine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm test

RUN npm run build 

CMD ["npm", "start"] 

EXPOSE 3000