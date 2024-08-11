import { useState } from "react";
import Home from "./Components/Home"
import Login from "./Components/Login"
import Register from "./Components/Register"
import Logo from './assets/logo.svg?react'

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showRegister, setShowRegister] = useState(false);
  const [showHome, setShowHome] = useState(false);


  const userName = localStorage.auth ? JSON.parse(localStorage.auth).username : '';

  const handleRegister = () => {
    setShowRegister(() => true);
    setShowLogin(() => false);
  }

  const handleLogin = () => {
    setShowLogin(() => true);
    setShowRegister(() => false);
  }

  const toggleScreen = () => {
    setShowLogin(() => false);
    setShowRegister(() => false);
    setShowHome(() => true)
  }

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4">
      {!showHome && (
        <>
          {showLogin && <>
            <Logo />
            <Login onShowRegister={handleRegister} onLogin={toggleScreen} />
          </>}

          {showRegister && <>
            <Logo />
            <Register onShowLogin={handleLogin} onLogin={toggleScreen} />
          </>}
        </>
      )}
      {showHome && <Home />}
    </div >
  )
}

export default App
