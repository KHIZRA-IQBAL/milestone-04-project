"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function PostList() {
  const [posts, setPosts] = useState([]);
  const router=useRouter();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await res.json();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const handleEdit = (id: number) => {
    // Navigate to the edit page, passing the post ID as a query parameter
    router.push(`/posts/edit/id`);
  };

  const handleDelete = async (id: number) => {
    // Send DELETE request (this won't work on JSONPlaceholder but simulates the logic)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      // Remove the post from the state (UI will update)
      setPosts(posts.filter((post: { id: number }) => post.id !== id));
    } else {
      console.error('Failed to delete the post');
    }
  };

  return (

    <div className='bg-stone-900  text-white pl-3'>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: number; title: string; content: string; body: string }) => (
          <li key={post.id}>
            <h2>{` ${post.id}:${post.title}`}</h2>
            <p>{post.content}</p>
            <p>{post.body}</p>

            <p>{post.body}</p>
            <br />
            <button onClick={() => handleEdit(post.id)}>Edit</button>
            <br />
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <br />

            <br />
          </li>
        ))}
      </ul>
      <Link href="/posts/create">
        <button>
          View create
        </button>
      </Link>
    </div>
  );
}