//import type { NextApiRequest, NextApiResponse } from 'next';

interface Writer {
  id: number;
  name: string;
  imageUrl: string;
  latestPostTitle: string;
  writerPageUrl: string;
  postUrl: string;

}

export async function getAllWriters(){
     const writers: Writer[] = [
  {
    id: 1,
    name: 'John Doe',
    imageUrl: '/images/john_doe.jpg',
    latestPostTitle: 'The art of writing',
    writerPageUrl: '/writers/john-doe',
    postUrl: '/posts/the-art-of-writing'
  },
  // ניתן להוסיף כותבים נוספים כאן
];
return writers;
}

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//     res.status(200).json(writers);
//   }
