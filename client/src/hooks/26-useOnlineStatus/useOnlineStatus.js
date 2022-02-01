import { useState } from "react"
import useEventListener from "../13-useEventListener"

export default function useOnlineStatus() {
  const [online, setOnline] = useState(navigator.online)

  useEventListener("online", () => setOnline(navigator.onLine))
  useEventListener("offline", () => setOnline(navigator.onLine))

  return online
}