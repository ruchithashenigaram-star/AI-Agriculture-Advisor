'use client'

import { motion } from 'framer-motion'
import { AlertTriangle, AlertCircle, CheckCircle2 } from 'lucide-react'

export default function RiskCard() {
  const riskLevel = 'Medium'
  const riskScore = 35

  const risks = [
    {
      level: 'Low',
      icon: <CheckCircle2 className="h-5 w-5 text-green-500" />,
      items: [
        'Soil structure is stable',
        'No waterlogging risk detected'
      ]
    },
    {
      level: 'Medium',
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
      items: [
        'Moderate water stress detected (45%)',
        'Immediate irrigation needed within 24 hours'
      ]
    },
    {
      level: 'High',
      icon: <AlertTriangle className="h-5 w-5 text-red-500" />,
      items: [
        'No high-risk factors detected',
        'Pest/disease: Low probability (8%)'
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Risk Assessment</h3>
      </div>

      {/* Risk Meter */}
      <div className="mb-8 bg-gradient-to-r from-green-50 to-red-50 dark:from-green-950/20 dark:to-red-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Overall Risk Level</p>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{riskLevel}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Risk Score</p>
            <p className="text-3xl font-bold text-yellow-600 dark:text-yellow-400">{riskScore}%</p>
          </div>
        </div>
        <div className="w-full bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 h-3 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${riskScore}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="h-full bg-yellow-500 rounded-full"
          />
        </div>
      </div>

      {/* Risk Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {risks.map((risk, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="bg-background border border-border rounded-lg p-4 transition-all"
          >
            <div className="flex items-center gap-2 mb-3">
              {risk.icon}
              <h4 className="font-semibold text-foreground">{risk.level} Risk</h4>
            </div>
            <ul className="space-y-2">
              {risk.items.map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-primary font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="bg-background border border-border rounded-lg p-4">
        <h4 className="font-semibold text-foreground mb-3">Risk Mitigation Actions</h4>
        <div className="space-y-3">
          <motion.div
            whileHover={{ paddingLeft: 16 }}
            className="flex gap-3 transition-all p-2"
          >
            <span className="text-yellow-500 font-bold text-lg">⚡</span>
            <div>
              <p className="text-sm font-medium text-foreground">Immediate: Irrigate within 24 hours</p>
              <p className="text-xs text-muted-foreground">Apply 6mm of water using drip system at 5:00 AM</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ paddingLeft: 16 }}
            className="flex gap-3 transition-all p-2"
          >
            <span className="text-blue-500 font-bold text-lg">📊</span>
            <div>
              <p className="text-sm font-medium text-foreground">Monitor: Check soil moisture daily</p>
              <p className="text-xs text-muted-foreground">Use soil sensor or manual check at 15cm depth</p>
            </div>
          </motion.div>
          <motion.div
            whileHover={{ paddingLeft: 16 }}
            className="flex gap-3 transition-all p-2"
          >
            <span className="text-green-500 font-bold text-lg">🛡️</span>
            <div>
              <p className="text-sm font-medium text-foreground">Prevent: Schedule next irrigation in 3 days</p>
              <p className="text-xs text-muted-foreground">Plan based on weather updates and soil conditions</p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
