import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetPokemonByNameQuery } from '@/services/pokemon';

const Pokemon: FC = () => {
  const router = useRouter();
  const { name } = router.query;

  const { data, error, isLoading } = useGetPokemonByNameQuery(name);

  if (isLoading) {
    return <>Loading...</>;
  }

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }

  return (
    <>
      <h2 className="text-xl">{data?.name}</h2>
      <Image
        src={data!.sprites.front_default}
        alt={data!.name}
        width={500}
        height={500}
        loading="lazy"
      />
    </>
  );
};

export default Pokemon;
