import React from 'react';
import Image from 'next/image';
import { useGetPokemonDetailsQuery } from '@/services/pokemon';

type Props = {
  name: string;
  url: string;
};

const Pokemon: React.FC<Props> = ({ name, url }) => {
  const { data, error, isLoading } = useGetPokemonDetailsQuery(name, url);

  if (data) {
    return (
      <div>
        <Image
          className="block mx-auto"
          src={data.sprites.other.dream_world.front_default}
          alt={name}
          width={128}
          height={128}
          priority
        />
      </div>
    );
  }

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  if (isLoading) {
    return <>loading ...</>;
  }
  return <div></div>;
};

export default Pokemon;
