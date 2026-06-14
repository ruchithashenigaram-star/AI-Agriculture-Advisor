'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, Upload, Mic, Download, Share2, AlertCircle } from 'lucide-react'
import WeatherCard from './weather-card'
import IrrigationCard from './irrigation-card'
import HealthAnalysisCard from './health-analysis-card'
import ReasoningCard from './reasoning-card'
import WaterSavingCard from './water-saving-card'
import RiskCard from './risk-card'

interface DashboardProps {
  onBackClick: () => void
}

const crops = ['Rice', 'Wheat', 'Cotton', 'Maize', 'Tomato', 'Chilli', 'Groundnut']
const soilTypes = ['Clay', 'Sandy', 'Loamy', 'Black Soil']
const languages = ['English', 'Telugu', 'Hindi']

export default function Dashboard({ onBackClick }: DashboardProps) {
  const [location, setLocation] = useState('Telangana, India')
  const [cropType, setCropType] = useState('Rice')
  const [soilType, setSoilType] = useState('Loamy')
  const [fieldArea, setFieldArea] = useState('5')
  const [language, setLanguage] = useState('English')
  const [loading, setLoading] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  const handleAnalyze = async () => {
    setLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setLoading(false)
    setAnalyzed(true)
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleDownloadReport = () => {
    // Simulated download
    alert('Report download initiated')
  }

  const handleShare = () => {
    // Simulated share
    alert('Share functionality')
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card px-6 py-4 shadow-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <button
            onClick={onBackClick}
            className="flex items-center gap-2 text-primary hover:text-accent transition-colors"
          >
            <ChevronLeft className="h-5 w-5" />
            <span className="font-medium">Back</span>
          </button>
          <h1 className="text-xl font-bold text-foreground">Smart Irrigation Dashboard</h1>
          <div className="w-20" />
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Panel - Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="bg-card border border-border rounded-lg p-6 sticky top-24">
              <h2 className="text-lg font-bold text-foreground mb-6">Field Information</h2>

              {/* Location Input */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="City, State"
                  />
                </div>

                {/* Crop Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Crop Type
                  </label>
                  <select
                    value={cropType}
                    onChange={(e) => setCropType(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {crops.map(crop => (
                      <option key={crop} value={crop}>{crop}</option>
                    ))}
                  </select>
                </div>

                {/* Soil Type */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Soil Type
                  </label>
                  <select
                    value={soilType}
                    onChange={(e) => setSoilType(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {soilTypes.map(soil => (
                      <option key={soil} value={soil}>{soil}</option>
                    ))}
                  </select>
                </div>

                {/* Field Area */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Field Area (hectares)
                  </label>
                  <input
                    type="number"
                    value={fieldArea}
                    onChange={(e) => setFieldArea(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    min="0.1"
                    step="0.1"
                  />
                </div>

                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    {languages.map(lang => (
                      <option key={lang} value={lang}>{lang}</option>
                    ))}
                  </select>
                </div>

                {/* Image Upload */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Upload Crop Image
                  </label>
                  <label className="flex items-center justify-center w-full px-4 py-3 border-2 border-dashed border-border rounded-lg cursor-pointer hover:border-primary transition-colors bg-background">
                    <div className="flex flex-col items-center">
                      <Upload className="h-5 w-5 text-muted-foreground mb-1" />
                      <span className="text-xs text-muted-foreground">Click to upload</span>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  {uploadedImage && (
                    <div className="mt-3 relative w-full h-32 rounded-lg overflow-hidden border border-border">
                      <img src={uploadedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Analyze Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full bg-primary hover:bg-accent text-primary-foreground font-semibold py-3 rounded-lg transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2 mt-6"
                >
                  {loading ? (
                    <>
                      <div className="h-5 w-5 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    'Analyze Field'
                  )}
                </motion.button>

                {/* Voice Assistant */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full border border-primary text-primary font-semibold py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <Mic className="h-5 w-5" />
                  Voice Assistant
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Panel - Results */}
          <div className="lg:col-span-2">
            <AnimatePresence>
              {!analyzed ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    No Analysis Yet
                  </h3>
                  <p className="text-muted-foreground">
                    Fill in your field information and click &quot;Analyze Field&quot; to get AI-powered irrigation recommendations.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="results"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="space-y-6"
                >
                  {/* Action Buttons */}
                  <div className="flex gap-4 justify-end">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownloadReport}
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-accent transition-colors"
                    >
                      <Download className="h-5 w-5" />
                      Download PDF
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleShare}
                      className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <Share2 className="h-5 w-5" />
                      Share
                    </motion.button>
                  </div>

                  {/* Results Cards */}
                  <WeatherCard />
                  <IrrigationCard fieldArea={parseFloat(fieldArea) || 5} cropType={cropType} />
                  <HealthAnalysisCard uploadedImage={uploadedImage} />
                  <ReasoningCard cropType={cropType} soilType={soilType} />
                  <WaterSavingCard />
                  <RiskCard />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>
    </div>
  )
}
