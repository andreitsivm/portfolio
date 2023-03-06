import { FC } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useGetPokemonQuery } from '@/services/pokemon';

const Pokemon: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  //  @ts-ignore: Argument of type error
  // TODO: find resolution of ts warning
  const { data, error, isLoading } = useGetPokemonQuery(id, { skip: !id });

  if (error) {
    return <>{JSON.stringify(error)}</>;
  }
  if (data) {
    return (
      <>
        <h2 className="text-xl">{data?.name}</h2>
        <Image
          src={data.sprites.other.dream_world.front_default}
          alt={data.name}
          width={128}
          height={128}
          loading="lazy"
        />
      </>
    );
  }
  return null;
};

export default Pokemon;
