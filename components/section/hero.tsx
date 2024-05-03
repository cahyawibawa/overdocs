import { siteConfig } from '@/config/site'
import { getGitHubStars } from '@/lib/github'
import { cn, numberFormatter } from '@/lib/utils'
import Link from 'next/link'
import { Suspense } from 'react'
import { Badge } from '../ui/badge'
import { Button, buttonVariants } from '../ui/button'

export function Hero() {
  return (
    <div className="my-10 flex w-full flex-col justify-center gap-1 px-3 py-4 text-center md:my-20 md:p-6">
      <div className="flex flex-col gap-6">
        <h1
          className={cn(
            'font-cal text-4xl text-transparent md:text-7xl',
            'bg-gradient-to-tl from-[hsl(var(--muted))] from-0% to-[hsl(var(--foreground))] to-40% bg-clip-text'
          )}
        >
          Streamline Your Product Launch with Ease
        </h1>
        <p className="mx-auto max-w-md text-lg text-muted-foreground md:max-w-lg md:text-xl">
          Build and ship fast your next project using Next.js 14, Lucia auth,
          Drizzle, NeonDB, shadcn/ui, and Mintlify.
        </p>
      </div>

      <div className="my-4 grid gap-2 sm:grid-cols-2">
        <div className="text-center sm:block sm:text-right">
          <Button className="w-48 rounded-full sm:w-auto" asChild>
            <Link href="/signin">Get Started</Link>
          </Button>
        </div>
        <div className="text-center sm:block sm:text-left">
          <Link
            href={siteConfig.links.github}
            target="_blank"
            className={cn(
              buttonVariants({
                variant: 'outline',
              }),
              'w-48 rounded-full sm:w-auto'
            )}
          >
            GitHub{' '}
            <Suspense fallback={<StarsBadgeFallback />}>
              <StarsBadge />
            </Suspense>
          </Link>
        </div>
      </div>
    </div>
  )
}

function StarsBadgeFallback() {
  return (
    <Badge variant="secondary" className="ml-1">
      ~
    </Badge>
  )
}

async function StarsBadge() {
  const stars = await getGitHubStars()
  return (
    <>
      <Badge variant="outline" className="ml-1 hidden sm:block">
        {numberFormatter(stars)}
      </Badge>
      <Badge variant="outline" className="ml-1 block sm:hidden">
        {stars}
      </Badge>
    </>
  )
}
