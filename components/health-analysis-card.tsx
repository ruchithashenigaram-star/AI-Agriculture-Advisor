'use client'

import { motion } from 'framer-motion'
import { Leaf, Activity } from 'lucide-react'

interface HealthAnalysisCardProps {
  uploadedImage: string | null
}

export default function HealthAnalysisCard({ uploadedImage }: HealthAnalysisCardProps) {
  const healthScore = 78
  const stressLevel = 'Moderate'
  const confidence = 92

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <Leaf className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Crop Health Analysis</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Image Preview */}
        {uploadedImage && (
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-1 flex items-center justify-center cursor-pointer"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border-2 border-primary/30 hover:border-primary transition-colors">
              <img src={uploadedImage} alt="Crop" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
            </div>
          </motion.div>
        )}

        {/* Analysis Results */}
        <div className={uploadedImage ? 'md:col-span-2' : 'md:col-span-3'}>
          <div className="space-y-4">
            {/* Health Score */}
            <motion.div
              whileHover={{ backgroundColor: 'var(--color-muted)' }}
              className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium text-foreground">Crop Health Score</p>
                <span className="text-2xl font-bold text-green-600 dark:text-green-400">{healthScore}/100</span>
              </div>
              <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${healthScore}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full bg-green-500 dark:bg-green-400"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Excellent condition</p>
            </motion.div>

            {/* Stress Detection */}
            <motion.div
              whileHover={{ backgroundColor: 'var(--color-muted)' }}
              className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Water Stress Detection</p>
                    <p className="text-xs text-muted-foreground">{stressLevel}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-yellow-600 dark:text-yellow-400">45%</p>
                  <p className="text-xs text-muted-foreground">Stress level</p>
                </div>
              </div>
            </motion.div>

            {/* Confidence Score */}
            <motion.div
              whileHover={{ backgroundColor: 'var(--color-muted)' }}
              className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4 transition-colors"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-foreground">Analysis Confidence</p>
                <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">{confidence}%</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">High accuracy detection</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis */}
      <div className="bg-background border border-border rounded-lg p-4">
        <h4 className="font-semibold text-foreground mb-3">Detailed Health Assessment</h4>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Leaf Color & Texture</p>
              <p className="text-xs text-muted-foreground">Good chlorophyll content, healthy appearance</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Water Status</p>
              <p className="text-xs text-muted-foreground">Moderate water stress, immediate irrigation recommended</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Disease Detection</p>
              <p className="text-xs text-muted-foreground">No significant diseases or pest damage detected</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-foreground">Nutrient Status</p>
              <p className="text-xs text-muted-foreground">Normal nutrient levels, standard NPK recommended</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
