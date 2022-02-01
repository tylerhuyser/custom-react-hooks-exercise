import useCopyToClipboard from "./CopyToClipboardComponent";

export default function CopyToClipboardComponent() {
  const [copyToClipboard, { success }] = useCopyToClipboard()
  
  return (
    <>
      <button onClick={() => copyToClipboard("This was copied")}>
        {success ? "Copied" : "Copt Text"}
      </button>
      <input type='text' />
    </>
  )
}