import { SiteLayout } from '@/components/layout/site-layout';
import { FAQs } from '@/components/marketing/faqs';
import { Hero } from '@/components/marketing/hero';
import { MonitoringCard } from '@/components/features/card-globe';
export default function Page() {
  return (
    <SiteLayout>
      <div className='grid gap-8'>
        <Hero />
        <MonitoringCard />
        <FAQs />
      </div>
    </SiteLayout>
  );
}
