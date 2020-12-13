import { useState, useCallback, ChangeEvent } from 'react';

const usePagination = (
  initialPage?: number
): [number, (e: ChangeEvent<unknown>, number: number) => void, number] => {
  const [page, setPage] = useState(initialPage ? initialPage : 0);
  const [perPage] = useState(10);

  const changePage = useCallback(
    (e: ChangeEvent<unknown>, number: number) => {
      setPage(number - 1);
    },
    [setPage]
  );

  return [page, changePage, perPage];
};

export default usePagination;
