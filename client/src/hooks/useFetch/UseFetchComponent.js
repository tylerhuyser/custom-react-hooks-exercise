import {useState} from 'react'
import useFetch from './useFetch'

export default function FetchComponent() {
  const [id, setID] = useState(1)
  const { loading, error, value } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
    {},
    [id]
  )

 return (

   <div>
      <div></div>
      <button onClick={() => setID(currentID => currentID + 1)}> Increment ID </button>
      <div>Loading: {loading.toString</div>
      <div>{JSON.stringify(error, null, 2)}</div>
      <div>{JSON.stringify(value, null, 2)}</div>
   </div>
 )

}