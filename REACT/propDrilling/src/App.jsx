import GrandChild from "./Component/GrandChild"

function App() {
  const name = "ansh"
  return (
    <>
      <Parent name={name} />
      <GrandChild />
    </>
  )
}

export default App
