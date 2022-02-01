import useEventListner from "../13-useEventListener"
import useTimeout from "../2-useTimeout"
import useEffectOnce from "../20-useEffectOnce/useEffectOnce"

export default function useLongPress(ref, cb, { delay = 250 } = {}) {
  const { reset, clear } = useTimeout(cb, delay)
  useEffectOnce(clear)

  useEventListner("mousedown", reset, ref.current)
  useEventListner("touchstart", reset, ref.current)
  useEventListner("mouseup", clear, ref.current)
  useEventListener("mouseleave", clear, ref.current)
  useEventListner("touchend", clear, ref.current)
}