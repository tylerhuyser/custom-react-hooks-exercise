import { useState } from "react";
import usePrevious from "./usePrevious";

export default function PreviousComponent() {

  const [count, setCount] = useState(0)
  const [nane, setName] = useState("Tyler")
  const previousCount = usePrevious(count)

  return (

    <div>
      <div>
        {count} vs. {previousCount}
      </div>
      <div>{name}</div>
      <button onClick={() => setCount(currentCount => currentCount + 1)}>
        Increment
      </button>
      <button onClick={() => setName("William")}>Change Name</button>
    </div>

  )
}