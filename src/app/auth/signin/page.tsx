"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const user = localStorage.getItem(email);
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser.password === password) {
        localStorage.setItem('loggedInUser', email);
        router.push('/posts/index');
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found');
    }
  };

  return (
    <div className='bg-slate-900 h-screen text-white flex justify-center items-center'>  
      <form onSubmit={handleSubmit}  className=' h-[400px] flex flex-col items-center border border-r-stone-100 w-[600px] '>
       <h1 className='pt-6 text-4xl'>SIGN IN</h1>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      className='text-black mt-20'/>
      <br />
    <input
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
     className='text-black mt-10'/>
    <button type="submit"  className='mt-10  border border-cyan-400 pl-5 pr-5 '>Sign In</button>
  </form>
  </div>
 
  );
}
