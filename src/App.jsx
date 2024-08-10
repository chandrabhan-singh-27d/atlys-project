import Login from "./Components/Login"
import Register from "./Components/Register"
import Logo from './assets/logo.svg?react'

function App() {


  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      <Logo width={50} height={50} />
      {/* <Login /> */}
      <Register />
    </div>
  )
}

export default App
