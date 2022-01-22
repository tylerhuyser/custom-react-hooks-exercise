import { useState } from "react"
import useEventListener from "../15-useWindowSize"

export default function useWindowSize() {
  const [window, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  })

  return windowSize
}