"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import useAuth from '../../../../hooks/useAuth'; 

export default function CreatePost() {
  const router = useRouter(); 
  
  useAuth(); 

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await fetch('/api/posts/create', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
    });

    // add in  the posts
    router.push('/posts/index');
  };

  return (
    <div className='bg-slate-900 text-white h-screen flex justify-center items-center'>  
       <form onSubmit={handleSubmit} className='flex items-center flex-col justify-center border border-cyan-900 w-[600px] h-[600px]'>
        <h1 className='pb-20 text-4xl'>CREATE NEW POST</h1>
    <input
      type="text"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      placeholder="Title"
    className='mb-20  mt-0 h-[40px] text-center text-xl text-black'/>
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Content"
      className='mb-20  mt-0 h-[100px] text-center text-xl text-black'/>
    <button type="submit" className='text-2xl border border-cyan-500 pl-3 pr-3 hover:text-cyan-200'>Create Post</button>
  </form>
  </div>

  );
}
