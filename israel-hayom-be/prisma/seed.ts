import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const writer1 = await prisma.writers.create({
    data: {
      name: 'John Doe',
      imageUrl: 'http://example.com/image1.jpg',
      pageUrl: 'http://example.com/johndoe',
      posts: {
        create: [
          { title: 'Post 1', url: 'http://example.com/post1' },
          { title: 'Post 2', url: 'http://example.com/post2' },
          { title: 'Post 3', url: 'http://example.com/post3' },
        ],
      },
    },
  });

  console.log({ writer1 });
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  }).finally(async () => {
    await prisma.$disconnect();
  });
