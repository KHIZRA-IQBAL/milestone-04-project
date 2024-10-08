import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'posts.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { id } = req.body;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    let posts = JSON.parse(fileContent);

    posts = posts.filter((post:any) => post.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

    res.status(200).json({ message: 'Post deleted successfully' });
  } else {
    res.status(405).json({ message: 'Only DELETE requests are allowed' });
  }
}
