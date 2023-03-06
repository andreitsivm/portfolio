import { PokemonApiUrl } from '@/constants/api';

export const fetchData = async <T>(url: string | number, options = {}): Promise<T> => {
  const response = await fetch(`${PokemonApiUrl}${url}`, options);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
};
