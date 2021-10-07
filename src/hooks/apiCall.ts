import { useState, useEffect, useCallback } from 'react'

function useApiCall<T>(
  apiCallback: () => Promise<any>,
  deps: Array<any>
): [any, boolean, any, () => void] {
  const [data, setData] = useState<any>(undefined)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<unknown>(undefined)

  const cb = useCallback(apiCallback, deps)

  const fetchData = useCallback(async () => {
    setError(undefined)
    setData(undefined)
    setIsLoading(true)
    try {
      const data = await cb()
      setData(data)
    } catch (e) {
      setError(e)
      setData(undefined)
    } finally {
      setIsLoading(false)
    }
  }, [cb])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [data, isLoading, error, fetchData]
}

export default useApiCall
