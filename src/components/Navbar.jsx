import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ setShowLogin, isLoggedIn }) => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: '首页', icon: '🏠' },
    { path: '/dashboard', label: '数据看板', icon: '📊' },
    { path: '/training', label: '培训认证', icon: '🎓' },
    { path: '/interaction', label: '需求互动', icon: '💬' },
    { path: '/ecosystem', label: '生态板块', icon: '🌐' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-darker/80 backdrop-blur-lg border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-xl">
              N
            </div>
            <span className="text-xl font-bold gradient-text">无人车产业与教育融合平台</span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
                  isActive(item.path)
                    ? 'bg-primary/20 text-primary border border-primary/30'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          <button
            onClick={() => setShowLogin(true)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              isLoggedIn
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'btn-primary text-white'
            }`}
          >
            {isLoggedIn ? '已登录' : '登录 / 注册'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
