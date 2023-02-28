import { PokemonApiUrl } from '@/constants/api';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Pokemon } from '../types';
import { Routes } from '@/constants/routes';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: PokemonApiUrl }),
  endpoints: builder => ({
    getPokemonByName: builder.query<Pokemon, string | number>({
      query: name => `${Routes.pokemon}${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
