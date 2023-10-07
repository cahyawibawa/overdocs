import { SiteLayout } from '@/components/layout/site-layout';
import { Shell } from '@/components/shell';
import { FAQs } from '@/components/faqs';
import { CustomButton } from '@/components/custom-button';
export default function Page() {
  return (
    <SiteLayout>
      <div className='grid gap-8'>
        <Shell className='text-center'>
          <h1 className='text-foreground font-cal mb-6 mt-2 text-3xl'>
            Elevate Your Web Projects
          </h1>
          <p className='text-muted-foreground mx-auto mb-6 max-w-lg text-lg'>
            A collection of tools and resources to help you build better web
            experiences.
          </p>
          <div className='flex justify-center items-center'>
            <CustomButton />
          </div>
        </Shell>
        <Shell>
          <FAQs />
        </Shell>
      </div>
    </SiteLayout>
  );
}
