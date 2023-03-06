import { useQuery, useMutation, useQueryClient, UseQueryResult } from 'react-query';
import type { Pokemon, AllPokemonCollection } from '@/types';
import { Routes } from '@/constants/routes';
import { fetchData } from './';

/**
 * @param {string| number} id id or name of pokemon
 * @returns {UseQueryResult}
 */
export const useGetPokemonQuery = (id: string | number): UseQueryResult<Pokemon> => {
  return useQuery(['pokemon', id], () => fetchData<Pokemon>(`${Routes.pokemon}${id}`));
};
/**
 * @param {number} offset offset of pokemon's list
 * @param {number}  limit maximum items in response
 * @returns {UseQueryResult}
 */
export const useGetAllPokemonQuery = (
  offset = 0,
  limit = 9,
): UseQueryResult<AllPokemonCollection> => {
  return useQuery([`allPokemon-${offset}`], () =>
    fetchData<AllPokemonCollection>(`${Routes.pokemon}?offset=${offset}&limit=${limit}`),
  );
};
/**
 * @param {string} url url received from all pokemon endpoint
 * @returns {UseQueryResult}
 */
export const useGetPokemonDetailsQuery = (name: string, url: string) => {
  return useQuery([name, url], async (): Promise<Pokemon> => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
};
