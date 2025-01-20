FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN npm install
RUN npx prisma generate

CMD ["sh", "-c", "npx prisma db push && npm start && npm run seed"]
