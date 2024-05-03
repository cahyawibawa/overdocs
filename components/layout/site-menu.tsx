'use client'

import { marketingPagesConfig } from '@/config/pages'
import { socialsConfig } from '@/config/socials'
import { Menu } from 'lucide-react'
import { usePathname, useSearchParams } from 'next/navigation'
import * as React from 'react'
import { Button } from '../ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { AppLink } from './app-link'
import { SocialIconButton } from './social-icon-button'

export function SiteMenu() {
  const [open, setOpen] = React.useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()

  React.useEffect(() => {
    setOpen(false)
  }, [pathname, searchParams]) // remove searchParams if not needed

  return (
    <Sheet open={open} onOpenChange={(value) => setOpen(value)}>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <Menu className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="top" className="flex flex-col">
        <SheetHeader>
          <SheetTitle className="ml-2 text-left">Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-1 flex-col justify-between gap-4">
          <ul className="grid gap-1">
            {marketingPagesConfig.map(({ href, title }) => {
              const isExternal = href.startsWith('http')
              const externalProps = isExternal ? { target: '_blank' } : {}
              const isActive = pathname.startsWith(href)
              return (
                <li key={href} className="w-full">
                  <AppLink
                    href={href}
                    label={title}
                    active={isActive}
                    {...externalProps}
                  />
                </li>
              )
            })}
          </ul>
          <div className="flex justify-between gap-2">
            <ul className="flex flex-wrap gap-2">
              {socialsConfig.map((props, i) => (
                <li key={i}>
                  <SocialIconButton {...props} />
                </li>
              ))}
            </ul>
            {/* <LoginButton /> */}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
