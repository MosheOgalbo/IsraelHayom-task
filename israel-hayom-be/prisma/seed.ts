import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
dotenv.config();

const prisma = new PrismaClient();

async function main() {
  // בדוק אם יש כבר כותבים
  const existingWriters = await prisma.writers.findMany();

  if (existingWriters.length === 0) {
    console.log('לא נמצאו כותבים, יוצרים כותבים חדשים.');

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

    const writer2 = await prisma.writers.create({
      data: {
        name: 'Jane Smith',
        imageUrl: 'http://example.com/image2.jpg',
        pageUrl: 'http://example.com/janesmith',
        posts: {
          create: [
            { title: 'Post A', url: 'http://example.com/postA' },
            { title: 'Post B', url: 'http://example.com/postB' },
            { title: 'Post C', url: 'http://example.com/postC' },
          ],
        },
      },
    });

    console.log('הכנסנו כותבים חדשים:', { writer1, writer2 });
  } else {
    console.log('ה-DB כבר מכיל כותבים.');
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
