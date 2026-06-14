'use client'

import { useState } from 'react'
import HomePage from '@/components/home-page'
import Dashboard from '@/components/dashboard'

export default function Page() {
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard'>('home')

  const handleAnalyzeClick = () => {
    setCurrentPage('dashboard')
  }

  const handleBackClick = () => {
    setCurrentPage('home')
  }

  return (
    <main className="min-h-screen bg-background">
      {currentPage === 'home' ? (
        <HomePage onAnalyzeClick={handleAnalyzeClick} />
      ) : (
        <Dashboard onBackClick={handleBackClick} />
      )}
    </main>
  )
}
