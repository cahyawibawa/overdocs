import { SiteHeader } from './site-header';
import { SiteFooter } from './site-footer';
export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='flex min-h-screen w-full flex-col items-center justify-center space-y-6 p-4 md:p-8'>
      <SiteHeader className='mx-auto w-full max-w-4xl' />
      <div className='mx-auto w-full max-w-4xl flex-1 flex-col items-start justify-center'>
        {children}
      </div>
      <SiteFooter className='mx-auto w-full max-w-4xl' />
    </main>
  );
}
