'use client'

import { motion } from 'framer-motion'
import { Leaf, Zap } from 'lucide-react'

interface HomePageProps {
  onAnalyzeClick: () => void
}

export default function HomePage({ onAnalyzeClick }: HomePageProps) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 shadow-sm">
        <div className="mx-auto max-w-7xl flex items-center gap-3">
          <div className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">AgriVision AI</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="mx-auto max-w-4xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            {/* Hero Image Placeholder */}
            <div className="mb-8">
              <svg
                viewBox="0 0 400 300"
                className="mx-auto h-64 w-full max-w-md"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#87CEEB" />
                    <stop offset="100%" stopColor="#E0F6FF" />
                  </linearGradient>
                </defs>
                {/* Sky */}
                <rect width="400" height="200" fill="url(#skyGrad)" />
                {/* Sun */}
                <circle cx="320" cy="60" r="40" fill="#FFD700" opacity="0.8" />
                {/* Ground */}
                <rect y="200" width="400" height="100" fill="#7CB342" />
                {/* Field rows */}
                <line x1="50" y1="200" x2="50" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                <line x1="110" y1="200" x2="110" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                <line x1="170" y1="200" x2="170" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                <line x1="230" y1="200" x2="230" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                <line x1="290" y1="200" x2="290" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                <line x1="350" y1="200" x2="350" y2="280" stroke="#5A9D2D" strokeWidth="4" />
                {/* Water droplets */}
                <circle cx="100" cy="140" r="6" fill="#4FC3F7" opacity="0.7" />
                <circle cx="150" cy="120" r="6" fill="#4FC3F7" opacity="0.7" />
                <circle cx="250" cy="130" r="6" fill="#4FC3F7" opacity="0.7" />
                <circle cx="300" cy="150" r="6" fill="#4FC3F7" opacity="0.7" />
              </svg>
            </div>

            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                <span className="text-primary">AgriVision AI</span>
                <br />
                Smart Irrigation Advisor
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                AI-powered irrigation recommendations for farmers. Get real-time weather insights, crop health analysis, and water-saving strategies to maximize your harvest.
              </p>
            </div>

            {/* Features Preview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 py-8">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Real-time Analysis</h3>
                <p className="text-sm text-muted-foreground">Instant crop health detection</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <Leaf className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Smart Recommendations</h3>
                <p className="text-sm text-muted-foreground">AI-driven irrigation planning</p>
              </motion.div>

              <motion.div
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-lg p-4 text-center"
              >
                <Zap className="h-6 w-6 text-primary mx-auto mb-2" />
                <h3 className="font-semibold text-foreground">Water Conservation</h3>
                <p className="text-sm text-muted-foreground">Save water, increase yield</p>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button
                onClick={onAnalyzeClick}
                className="bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 inline-block"
              >
                Analyze Field
              </button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card px-6 py-8 mt-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-foreground mb-3">About</h3>
              <p className="text-sm text-muted-foreground">
                AgriVision AI leverages advanced machine learning to provide farmers with actionable irrigation insights.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Features</h3>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>Weather forecasting</li>
                <li>Crop health analysis</li>
                <li>Water conservation tips</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-foreground mb-3">Contact</h3>
              <p className="text-sm text-muted-foreground">
                support@agrivision.ai
                <br />
                +1 (555) 123-4567
              </p>
            </div>
          </div>
          <div className="border-t border-border pt-8 flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © 2026 AgriVision AI. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-semibold">Disclaimer:</span> This is an AI advisory tool. Consult local agricultural experts for critical decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
