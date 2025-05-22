'use client'

import { useState, useEffect } from 'react'
import { Badge, Card } from '@tremor/react'

export default function CrawlMonitor() {
  const [activeCrawls, setActiveCrawls] = useState<string[]>([])

  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetch('/api/crawls/active')
      const data = await response.json()
      setActiveCrawls(data)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <Card>
      <h3 className="text-lg font-semibold mb-4">Active Crawls</h3>
      <div className="space-y-2">
        {activeCrawls.map((site) => (
          <Badge key={site} color="emerald">
            {site}
          </Badge>
        ))}
      </div>
    </Card>
  )
}
