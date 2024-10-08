import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem('loggedInUser');
    if (!user) {
      router.push('/auth/signin'); // Redirect to sign-in if not authenticated
    }
  }, [router]);
};

export default useAuth;
