import { SiteLayout } from '@/components/layout/site-layout'
import { FAQs } from '@/components/section/faqs'
import FeaturedStack from '@/components/section/featured-stack'
import { Hero } from '@/components/section/hero'

export default async function IndexPage() {
  return (
    <SiteLayout>
      <div className="grid space-y-7">
        <Hero />
        <FeaturedStack />
        <FAQs />
      </div>
    </SiteLayout>
  )
}
