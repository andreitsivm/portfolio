import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useGetPokemonByNameQuery } from '@/services/pokemon';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');
  return (
    <>
      <main>
        <h1 className="text-tahiti text-xl">123213123</h1>
      </main>
    </>
  );
}
