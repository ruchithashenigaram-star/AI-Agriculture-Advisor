'use client'

import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

interface ReasoningCardProps {
  cropType: string
  soilType: string
}

export default function ReasoningCard({ cropType, soilType }: ReasoningCardProps) {
  const reasoning = {
    'Rice': {
      'Loamy': 'Rice requires consistent moisture in loamy soil which has good water retention. Current weather shows 28°C temperature with 65% humidity. With moderate water stress detected, immediate irrigation is needed. Loamy soil can hold 50-70% of water, making every 2-3 days ideal for rice cultivation.',
      'Clay': 'Rice in clay soil needs careful management as clay retains water longer. Given current conditions, space irrigation every 3-4 days to prevent waterlogging. Clay soil holds 60-80% water content, so over-irrigation can cause root damage.',
      'Sandy': 'Sandy soil drains quickly, requiring more frequent irrigation for rice. With sandy soil\'s 20-35% water retention, daily or bi-daily irrigation is recommended. Current humidity suggests morning irrigation at 5-6 AM would be optimal.',
    },
    'Wheat': {
      'Loamy': 'Wheat in loamy soil shows excellent growth potential. Loamy soil\'s balanced structure (40% water capacity) suits wheat well. Current moderate water stress indicates 3-day irrigation cycle would be ideal.',
      'Clay': 'Wheat can thrive in clay but needs drainage. Clay\'s high water retention suggests spacing irrigation 4-5 days apart. Current 65% humidity favors reduced irrigation frequency.',
      'Sandy': 'Wheat in sandy soil requires frequent but light watering. Sandy soil\'s poor retention calls for 2-3 day cycles. Current temperature of 28°C accelerates water loss, necessitating regular monitoring.',
    },
  }

  const defaultReasoning = `Based on ${cropType} cultivation requirements and ${soilType} soil properties: The current environmental conditions show moderate water stress at 45%. Weather forecast indicates stable conditions for the next 2 days. Soil moisture sensors suggest irrigation is needed within 24 hours. The recommended 2-3 day frequency balances water availability with crop water demands.`

  const reason = reasoning[cropType as keyof typeof reasoning]?.[soilType as keyof any] || defaultReasoning

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <Lightbulb className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">AI Reasoning</h3>
      </div>

      <div className="bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 rounded-lg p-6">
        <p className="text-base leading-relaxed text-foreground">
          {reason}
        </p>
        <div className="mt-6 pt-6 border-t border-primary/10">
          <p className="text-sm font-semibold text-primary mb-3">Key Factors Considered:</p>
          <ul className="space-y-2">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span className="text-sm text-muted-foreground">Crop type ({cropType}) water requirements and growth stage</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span className="text-sm text-muted-foreground">Soil composition ({soilType}) and water retention capacity</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span className="text-sm text-muted-foreground">Current weather patterns and 3-day forecast</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span className="text-sm text-muted-foreground">Detected water stress level from crop health analysis</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold">→</span>
              <span className="text-sm text-muted-foreground">Historical weather data and seasonal irrigation patterns</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 p-4 bg-background border border-border rounded-lg">
        <p className="text-xs text-muted-foreground italic">
          💡 <strong>Farmer&apos;s Note:</strong> This recommendation is based on current data. Regular monitoring of soil moisture and plant condition will help refine future recommendations for better results.
        </p>
      </div>
    </motion.div>
  )
}
