import { useEffect } from "react"
import useMediaQuery from "../16-useMediaQuery/useMediaQuery"
import { useLocalStoragae } from "../8-useStorage"

export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStoragae("useDarkMode")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}