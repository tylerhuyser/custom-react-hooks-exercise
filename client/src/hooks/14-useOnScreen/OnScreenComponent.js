import { useRef } from 'react'
import useOnScreen from './useOnScreen'

export default function OnScreenComponent() {
  
  const headerTwoRef = useRef()
  const visible = useOnScreen(headerTwoRef, "-100px")

  return (
    <div>
      <h1>Header</h1>
      <div>
        Lorem Ipsum...
      </div>
      <h2 ref={headerTwoRef}> Header 2 {visible && "(Visible)"}</h2>
      <div>
        Lorem Ipsum...
      </div>
    </div>


  )
}