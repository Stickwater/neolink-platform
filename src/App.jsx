import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import DataDashboard from './pages/DataDashboard'
import Training from './pages/Training'
import Interaction from './pages/Interaction'
import Ecosystem from './pages/Ecosystem'
import LoginModal from './components/LoginModal'

function App() {
  const [showLogin, setShowLogin] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userCredentials, setUserCredentials] = useState({ username: '', password: '' })

  const handleLogin = (username, password) => {
    setUserCredentials({ username, password })
    setIsLoggedIn(true)
    setShowLogin(false)
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-darker via-dark to-[#0f1433]">
        <Navbar setShowLogin={setShowLogin} isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DataDashboard />} />
          <Route path="/training" element={<Training isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} />} />
          <Route path="/interaction" element={<Interaction />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
        </Routes>
        {showLogin && <LoginModal onLogin={handleLogin} onClose={() => setShowLogin(false)} />}
      </div>
    </Router>
  )
}

export default App
