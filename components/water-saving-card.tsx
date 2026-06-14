'use client'

import { motion } from 'framer-motion'
import { Droplet } from 'lucide-react'

export default function WaterSavingCard() {
  const tips = [
    {
      title: 'Drip Irrigation System',
      description: 'Install drip irrigation to reduce water usage by 50% compared to flood irrigation',
      savings: '50%'
    },
    {
      title: 'Mulching',
      description: 'Apply organic mulch to reduce evaporation and maintain soil moisture',
      savings: '30%'
    },
    {
      title: 'Early Morning Watering',
      description: 'Irrigate at 5-6 AM when evaporation is minimal and wind is calm',
      savings: '25%'
    },
    {
      title: 'Soil Moisture Monitoring',
      description: 'Use soil sensors to irrigate only when moisture drops below optimal levels',
      savings: '35%'
    },
    {
      title: 'Crop Rotation',
      description: 'Plant drought-resistant crops in alternate seasons to reduce overall water needs',
      savings: '40%'
    },
    {
      title: 'Rainwater Harvesting',
      description: 'Collect and store rainwater during monsoon for dry season irrigation',
      savings: '45%'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <Droplet className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Water Saving Tips</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tips.map((tip, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02, backgroundColor: 'var(--color-muted)' }}
            className="bg-background border border-border rounded-lg p-4 transition-all cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-2">
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {tip.title}
              </h4>
              <span className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full ml-2 flex-shrink-0">
                {tip.savings}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              {tip.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-6 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4"
      >
        <p className="text-sm text-foreground mb-2">
          <span className="font-semibold text-green-700 dark:text-green-400">Combined Impact:</span> By implementing these water-saving techniques, you can conserve up to <span className="font-bold">60% of irrigation water</span> while maintaining crop yield.
        </p>
        <p className="text-xs text-muted-foreground">
          This translates to significant cost savings and environmental benefits for sustainable agriculture.
        </p>
      </motion.div>
    </motion.div>
  )
}
