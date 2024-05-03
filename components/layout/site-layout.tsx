import { SiteFooter } from './site-footer'
import { SiteHeader } from './site-header'

export function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center space-y-6 p-4 md:p-8">
      <div className="mx-auto w-full max-w-4xl">
        <SiteHeader />
      </div>
      <div className="mx-auto w-full max-w-4xl flex-1 flex-col items-start justify-center">
        {children}
      </div>
      <SiteFooter className="mx-auto w-full max-w-4xl" />
    </main>
  )
}
