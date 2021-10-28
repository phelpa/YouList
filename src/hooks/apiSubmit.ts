import { useState, useCallback } from 'react'

function useApiSubmit<T>(
  apiCallback: () => Promise<T>,
  deps: Array<any>
): [boolean, () => Promise<T>] {
  const [isLoading, setIsLoading] = useState(false)
  const cb = useCallback(apiCallback, deps)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const data = await cb()
      return data
    } catch (e) {
      throw e
    } finally {
      setIsLoading(false)
    }
  }, [cb])

  return [isLoading, fetchData]
}

export default useApiSubmit
