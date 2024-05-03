import { features } from '@/config/features'
import React from 'react'
import { CardContainer } from '../ui/card'
import CardSpotlight from './featured-card'

export default function FeaturedStack() {
  return (
    <CardContainer>
      <div className="py-24">
        <h2 className="text-center text-2xl font-semibold sm:text-3xl">
          Start instantly.
          <br />
          Make it yours, Ship within seconds.
        </h2>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {features.map((feature, i) => (
          <CardSpotlight
            key={i}
            name={feature.name}
            description={feature.description}
            logo={<feature.logo className="size-12" />}
          />
        ))}
      </div>
    </CardContainer>
  )
}
