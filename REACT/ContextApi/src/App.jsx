import { UserContext } from "./Component/UserContext"
import Profile from "./Component/Profile"
function App() {


  return (
    <>
      <UserContext.Provider value={{ name: "ansh", age: 21 }}>
        <Profile />
      </UserContext.Provider>
    </>
  )
}

export default App
