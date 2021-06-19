import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/Link';

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className='not-found'>
      <h1>Ooops.....</h1>
      <h2>That page couldnot be found</h2>
      <p>
        Go back to the
        <Link href='/'>
          <a>Home Page</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
