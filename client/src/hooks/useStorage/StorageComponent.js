import { useSessionStorage, useLocalStorage } from './useStorage'

export default function StorageComponent() {
  const [name, setName, removeName] = useSessionStorage("name", "Tyler")
  const [age, setAge, removeAge] = useLocalStorage("age", 27)

  return (
    <div>
      <div>
        {name} / {age}
      </div>
      <button onClick={() => setName("William")}>Set Name</button>
      <button onClick={() => setAge(50)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  )
}