import React from 'react';
import Container from '@/components/container';
import Link from 'next/link';

import Pokeball from '@/images/logo.svg';
import Pokedex from '@/images/logo_desktop-text.svg';

const Header = () => {
  return (
    <header className="shadow-md bg-slate-600">
      <Container className="flex justify-between items-center h-16 px-2 xl:px-0">
        <Link
          href="/"
          className="w-full font-bold color-purple-500 text-l text-blue flex"
        >
          <Pokeball className="mr-2" />
          <Pokedex className="hidden md:inline-block" />
        </Link>
        <button>Text</button>
      </Container>
    </header>
  );
};

export default Header;
