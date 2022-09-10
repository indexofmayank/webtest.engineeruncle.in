import React from 'react'

import { Layout } from '../components/layout'
import { Hero } from '../components/hero'
import { HeroIllustration } from '../components/hero-illustration'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Clinet's area | Webtest.engineerUncle.in"
        content="The next generation bussiness method - Our team of experts uses a methodology to identify the logic most likely fit your needs. We examin annual percentage rates, annual fees."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
