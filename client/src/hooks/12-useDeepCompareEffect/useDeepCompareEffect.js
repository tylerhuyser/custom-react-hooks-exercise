import { useEffect, useRef } from 'react'
import isEqual from 'lodash/fp/isEqual'

export default function useDeepCompareEffect(callback, dependencies) {
  const currentDependencies = useRef()

  if (!isEqual(currentDependencies.current, dependencies)) {
    currentDependenceiesRef.current = dependencies
  }

  useEffect(callback, [currentDependenceiesRef.current])
}