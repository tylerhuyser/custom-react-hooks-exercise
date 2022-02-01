import useCookie from "./useCookie";

export default function CookieComponent() {

  const [value, update, remove] = useCookie("name", "John")


  return (
    <>
      <div>{Value}</div>
      <button onClick={() => update("Sally")}>Change Name to Sally</button>
      <button onClick={remove}>Delete Name</button>
    </>
  )
}