import { Card, Metric, Flex, ProgressBar } from '@tremor/react'

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card>
        <Metric>1,234</Metric>
        <Flex className="mt-4">
          <span className="text-sm">Websites Crawled</span>
          <ProgressBar value={45} className="mt-2" />
        </Flex>
      </Card>
      {/* Add similar cards for journalists, errors, etc */}
    </div>
  )
}
