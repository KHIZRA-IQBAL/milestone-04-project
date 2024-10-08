"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    localStorage.setItem(email, JSON.stringify(user));
    alert('User created successfully');
    router.push('/auth/signin');
  };

  return (
    <div  className='bg-slate-900 h-screen flex justify-center items-center'>
         <form onSubmit={handleSubmit} className='border border-cyan-500 h-[400px] w-[400px] '>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      className='text-black mb-10   ml-20 mt-20'/>
      <br />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      className='text-black mb-10 ml-20 mt-10'/>
      <br />
      <button type="submit" className='text-white ml-32 border border-cyan-600 pl-4 pr-4'>Sign Up</button>
    </form >
    </div>
  
  );
}
