import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

export const useQuery = () => {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
};
export const useGetQueryValue = (name: string) => {
  const { search } = useLocation();

  const data = useMemo(() => new URLSearchParams(search), [search]);
  return data.get(name);
};
