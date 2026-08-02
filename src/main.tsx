import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { registerSW } from 'virtual:pwa-register'
import './styles.css'

const HomePage = lazy(() => import('./pages/HomePage'))

registerSW({ immediate: true })

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/demarcosfinefoods">
      <Suspense fallback={<div className="min-h-screen bg-[#f7f7f2]" aria-label="Loading" />}>
        <Routes><Route path="*" element={<HomePage />} /></Routes>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
