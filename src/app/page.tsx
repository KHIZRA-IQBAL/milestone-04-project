import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-gray-900 h-screen '>
      <h1 className='text-center pt-6 text-cyan-600 text-5xl pb-20'>Welcome to the Blog Platform</h1>
      <p className='text-center text-white  border border-s-violet-500 w-[800px] bg-cyan-500 ml-72'>This is a simple blog application where you can create, edit, and delete posts.your not just a user — youre part of a vibrant community of writers, creators, and thinkers. Engage in meaningful discussions, gain followers, and discover new ideas. You matter here</p>
      <div className='flex  justify-evenly text-3xl pt-20 text-cyan-200 hover:text-cyan-600'>
        <Link href="/auth/signin">
          <button >
            Sign In
          </button>
        </Link>
        <Link href="/auth/signup">
          <button >
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

