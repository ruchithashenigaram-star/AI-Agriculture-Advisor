'use client'

import { motion } from 'framer-motion'
import { Droplets, Clock, RotateCw } from 'lucide-react'

interface IrrigationCardProps {
  fieldArea: number
  cropType: string
}

export default function IrrigationCard({ fieldArea, cropType }: IrrigationCardProps) {
  // Simulated calculations based on crop type
  const cropWaterNeeds: Record<string, { daily: number; frequency: string; time: string }> = {
    'Rice': { daily: 5, frequency: 'Every 2 days', time: '5:00 AM' },
    'Wheat': { daily: 3, frequency: 'Every 3 days', time: '6:00 AM' },
    'Cotton': { daily: 4, frequency: 'Every 2 days', time: '5:30 AM' },
    'Maize': { daily: 3.5, frequency: 'Every 3 days', time: '6:00 AM' },
    'Tomato': { daily: 2.5, frequency: 'Daily', time: '5:00 AM' },
    'Chilli': { daily: 2, frequency: 'Every 2 days', time: '5:30 AM' },
    'Groundnut': { daily: 2.5, frequency: 'Every 3 days', time: '6:00 AM' },
  }

  const crop = cropWaterNeeds[cropType] || cropWaterNeeds['Rice']
  const totalWater = (crop.daily * fieldArea).toFixed(1)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <Droplets className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">AI Irrigation Recommendation</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Left Column */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ backgroundColor: 'var(--color-muted)' }}
            className="bg-primary/10 border border-primary/20 rounded-lg p-4 transition-colors"
          >
            <p className="text-sm text-muted-foreground mb-2">Irrigation Needed</p>
            <p className="text-3xl font-bold text-primary">Yes</p>
            <p className="text-xs text-muted-foreground mt-2">Based on current weather and soil moisture</p>
          </motion.div>

          <motion.div
            whileHover={{ backgroundColor: 'var(--color-muted)' }}
            className="bg-accent/10 border border-accent/20 rounded-lg p-4 transition-colors"
          >
            <p className="text-sm text-muted-foreground mb-2">Recommended Water Quantity</p>
            <p className="text-3xl font-bold text-accent">{totalWater} <span className="text-lg">mm</span></p>
            <p className="text-xs text-muted-foreground mt-2">For your {fieldArea} hectare field</p>
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ backgroundColor: 'var(--color-muted)' }}
            className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Best Irrigation Time</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{crop.time}</p>
            <p className="text-xs text-muted-foreground mt-2">Early morning for better absorption</p>
          </motion.div>

          <motion.div
            whileHover={{ backgroundColor: 'var(--color-muted)' }}
            className="bg-muted rounded-lg p-4 transition-colors"
          >
            <div className="flex items-center gap-2 mb-2">
              <RotateCw className="h-4 w-4 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">Frequency</p>
            </div>
            <p className="text-2xl font-bold text-foreground">{crop.frequency}</p>
            <p className="text-xs text-muted-foreground mt-2">Optimal schedule for {cropType}</p>
          </motion.div>
        </div>
      </div>

      {/* Details */}
      <div className="bg-background border border-border rounded-lg p-4">
        <h4 className="font-semibold text-foreground mb-3">Irrigation Guidelines</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Start irrigation at <strong>{crop.time}</strong> when soil is cool</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Apply <strong>{totalWater}mm</strong> of water gradually to avoid runoff</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Check soil moisture 24 hours after irrigation</span>
          </li>
          <li className="flex gap-2">
            <span className="text-primary font-bold">•</span>
            <span>Adjust schedule based on rainfall and soil conditions</span>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}
