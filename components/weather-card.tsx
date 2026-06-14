'use client'

import { motion } from 'framer-motion'
import { Cloud, CloudRain, Wind } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const weatherData = [
  { time: '12 AM', temp: 22 },
  { time: '3 AM', temp: 20 },
  { time: '6 AM', temp: 18 },
  { time: '9 AM', temp: 24 },
  { time: '12 PM', temp: 28 },
  { time: '3 PM', temp: 32 },
  { time: '6 PM', temp: 26 },
]

const forecastData = [
  { day: 'Today', high: 32, low: 22, rain: 10, condition: 'Sunny' },
  { day: 'Tomorrow', high: 30, low: 20, rain: 25, condition: 'Partly Cloudy' },
  { day: 'Day 3', high: 28, low: 18, rain: 60, condition: 'Rainy' },
]

export default function WeatherCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-card border border-border rounded-lg p-6 overflow-hidden"
    >
      <div className="flex items-center gap-3 mb-6">
        <Cloud className="h-6 w-6 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Weather Summary</h3>
      </div>

      {/* Current Weather */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Temperature</p>
          <p className="text-2xl font-bold text-foreground">28°C</p>
          <p className="text-xs text-muted-foreground mt-1">Humid</p>
        </div>
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Humidity</p>
          <p className="text-2xl font-bold text-foreground">65%</p>
          <p className="text-xs text-muted-foreground mt-1">Moderate</p>
        </div>
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Rain Probability</p>
          <p className="text-2xl font-bold text-foreground">25%</p>
          <p className="text-xs text-muted-foreground mt-1">Low</p>
        </div>
        <div className="bg-muted rounded-lg p-4">
          <p className="text-sm text-muted-foreground mb-1">Wind Speed</p>
          <p className="text-2xl font-bold text-foreground">12 km/h</p>
          <Wind className="h-4 w-4 text-accent mt-1" />
        </div>
      </div>

      {/* Temperature Trend */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-foreground mb-4">Temperature Trend</h4>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={weatherData}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
            <XAxis dataKey="time" stroke="var(--color-muted-foreground)" />
            <YAxis stroke="var(--color-muted-foreground)" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--color-card)',
                border: `1px solid var(--color-border)`,
                borderRadius: '8px',
              }}
            />
            <Line
              type="monotone"
              dataKey="temp"
              stroke="var(--color-primary)"
              strokeWidth={2}
              dot={{ fill: 'var(--color-primary)', r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 3-Day Forecast */}
      <div>
        <h4 className="text-sm font-semibold text-foreground mb-4">3-Day Forecast</h4>
        <div className="space-y-3">
          {forecastData.map((forecast, idx) => (
            <motion.div
              key={idx}
              whileHover={{ backgroundColor: 'var(--color-muted)' }}
              className="bg-background border border-border rounded-lg p-4 flex items-center justify-between transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="text-center min-w-16">
                  <p className="font-semibold text-foreground text-sm">{forecast.day}</p>
                </div>
                {forecast.rain > 40 ? (
                  <CloudRain className="h-6 w-6 text-primary" />
                ) : (
                  <Cloud className="h-6 w-6 text-primary" />
                )}
                <p className="text-sm text-muted-foreground">{forecast.condition}</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Rain</p>
                  <p className="font-semibold text-foreground">{forecast.rain}%</p>
                </div>
                <div className="text-right min-w-20">
                  <p className="text-xs text-muted-foreground">Temp</p>
                  <p className="font-semibold text-foreground">{forecast.high}°/{forecast.low}°</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
