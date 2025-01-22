FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./
COPY prisma ./prisma/
COPY . .

RUN npm install

 RUN npx prisma generate
#  RUN npx migrate-mongo up

# RUN npx prisma db push

CMD ["sh", "-c", " npx migrate-mongo up && npx prisma generate"]

 CMD ["sh", "-c", "  npm run start:dev && npx prisma db push"]
