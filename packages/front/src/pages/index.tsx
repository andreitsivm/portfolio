import { useState } from 'react';
import { useGetAllPokemonQuery } from '@/services/pokemon';
import PokemonCard from '@/components/pokemon';

export default function Home() {
  const [offset, setOffset] = useState(0);
  const { data, isLoading } = useGetAllPokemonQuery(offset);
  console.log(data);

  if (data) {
    const { results } = data;
    return (
      <>
        <main>
          <h1 className="text-tahiti text-xl text-center">Pokemon`s</h1>
          <div className="grid grid-cols-3">
            {results.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                {...pokemon}
              />
            ))}
          </div>
          <button onClick={() => setOffset(prev => prev - 9)}>Load Prev</button>
          <button onClick={() => setOffset(prev => prev + 9)}>Load Next</button>
        </main>
      </>
    );
  }

  return null;
}
