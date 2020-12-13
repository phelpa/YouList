import { useState, useCallback } from 'react';

function useApiSubmit<T>(
  apiCallback: () => Promise<T>,
  deps: Array<any>
): [() => Promise<T>, boolean] {
  const [isLoading, setIsLoading] = useState(false);
  const cb = useCallback(apiCallback, deps);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await cb();
      return data;
    } catch (e) {
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, [cb]);

  return [fetchData, isLoading];
}

export default useApiSubmit;
