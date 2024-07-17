'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const About = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect logic when the component mounts
    router.push('/about/mission');
  }, [router]); // Empty dependency array to run this effect only once on mount

  return (
    <div>
      <p>Redirecting to Transport ...</p>
    </div>
  );
};

export default About;
