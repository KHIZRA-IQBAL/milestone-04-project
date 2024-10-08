import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'data', 'posts.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { title, content } = req.body;

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const posts = JSON.parse(fileContent);

    const newPost = {
      id: Date.now(),
      title,
      content,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    posts.push(newPost);
    fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));
    res.status(200).json(newPost);
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed' });
  }
}
