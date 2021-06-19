import React from 'react';
import Link from 'next/Link';
import Image from 'next/Image';
const Navbar = () => {
  return (
    <nav>
      <div className='logo'>
        <Image src='/doge.png' width={128} height={77} />
      </div>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <Link href='/ninjas'>
        <a>Ninja Listing</a>
      </Link>
    </nav>
  );
};

export default Navbar;
