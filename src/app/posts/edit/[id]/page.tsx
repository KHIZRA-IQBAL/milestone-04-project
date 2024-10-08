"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import useAuth from '../../../../../hooks/useAuth'; 

export default function EditPost({ params }: { params: { id: string } }) {
  useAuth(); 

  const [post, setPost] = useState({ title: '', content: '' });
  const router = useRouter();
  const { id } = params; // Get the post ID from params

  useEffect(() => {
    // Fetch the post data when the page loads
    const fetchPost = async () => {
      const res = await fetch(`/api/posts/${id}`); // Fetch the post from a separate posts API
      const data = await res.json();
      setPost(data);
    };
    if (id) {
      fetchPost();
    }
  }, [id]);

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Send the updated post data to the edit API
    await fetch(`/api/edit/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title: post.title, content: post.content }),
      headers: { 'Content-Type': 'application/json' },
    });

    alert('Post updated successfully!');
    router.push('/posts/index'); 
  };

  return (
    <div className='bg-slate-900 text-white h-screen flex justify-center items-center'>
      <form onSubmit={handleEdit} className='flex items-center flex-col justify-center border border-cyan-900 w-[600px] h-[600px]'>
        <h1 className='pb-10 text-4xl'>EDIT PAGE</h1>
        <input
          type="text"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          placeholder="Title"
          required
          className='mb-20  mt-0 h-[40px] text-center text-xl text-black' />
        <textarea
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
          placeholder="Content"
          required
          className='mb-20  mt-0 h-[100px] text-center text-xl text-black'/>
        <button type="submit" className='text-2xl border border-cyan-500 pl-3 pr-3 hover:text-cyan-200'>Update Post</button>
      </form>
    </div>
  );
}
