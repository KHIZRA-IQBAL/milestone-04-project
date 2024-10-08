import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'app', 'api', 'posts.json');

// PUT: Update a post by ID
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const { title, content } = await req.json();

  const fileContent = fs.readFileSync(filePath, 'utf8');
  let posts = JSON.parse(fileContent);

  const postIndex = posts.findIndex((p:any) => p.id === parseInt(id));
  if (postIndex === -1) {
    return NextResponse.json({ message: 'Post not found' }, { status: 404 });
  }

  // Update post
  posts[postIndex] = { ...posts[postIndex], title, content };

  // Write updated posts back to file
  fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

  return NextResponse.json({ message: 'Post updated successfully' }, { status: 200 });
}
