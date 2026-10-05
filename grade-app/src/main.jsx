import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css'
import Login from './Login.jsx'          // 로그인 화면
import UserPoint from './UserPoint.jsx'  // 사용자 포인트 화면
import App from './App.jsx'              // 관리자 포인트 화면

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user" element={<UserPoint />} />
        <Route path="/admin" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
