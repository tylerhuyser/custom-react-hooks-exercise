import { useCallBack, useEffect, useState } from 'react'

export default function useAsync(callBack, dependencies = []) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [value, setValue] = useState()

  const callbackMemoized = useCallback(
    () => {
      setLoading(true)
      setError(undefined)
      setValue(undefined)
      callBack()
        .then(setValue)
        .catch(setError)
        .finally(() => setLoading(false))
    },
    dependencies)
  
  useEffect(() => {
    callbackMemoized()
  }, [callbackMemoized])

  return { loaded, error, value }
  
}