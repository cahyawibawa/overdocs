'use client'

import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../ui/button'
import { SiteMenu } from './site-menu'

interface Props {
  className?: string
}

export function SiteHeader({ className }: Props) {
  //   const { isSignedIn } = useUser();

  return (
    <header
      className={cn('grid w-full grid-cols-2 gap-2 md:grid-cols-5', className)}
    >
      <div className="flex items-center md:col-span-1">
        <Link
          href="/"
          className="font-cal text-muted-foreground hover:text-foreground"
        >
          OverDocs
        </Link>
      </div>
      <div className="hidden items-center justify-center rounded-full border md:col-span-3 md:flex md:gap-3">
        <Button variant="link" asChild className="text-foreground md:mr-3">
          <Link href="/blog">Blog</Link>
        </Button>
        <Button variant="link" asChild className="text-foreground md:mr-3">
          <Link href="/playground">Playground</Link>
        </Button>
        <Button variant="link" asChild className="text-foreground md:mr-3">
          <Link href="/changelog">Changelog</Link>
        </Button>
        <Button variant="link" asChild className="text-foreground md:mr-3">
          <Link href={siteConfig.links.docs}>
            Docs
            <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" />
          </Link>
        </Button>
      </div>
      <div className="flex items-center justify-end gap-3 md:col-span-1">
        <div className="block md:hidden">
          <SiteMenu />
        </div>
        <Button asChild className=" rounded-full">
          <Link href={siteConfig.links.docs}>Sign In</Link>
        </Button>
      </div>
    </header>
  )
}
