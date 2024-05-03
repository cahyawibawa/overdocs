import { StatusWidget } from '@/components/layout/status-widget'
import { Shell } from '@/components/shell'
import { siteConfig } from '@/config/site'
import { socialsConfig } from '@/config/socials'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { ThemeToggle } from '../theme-toggle'
import { SocialIconButton } from './social-icon-button'

interface Props {
  className?: string
}

export function SiteFooter({ className }: Props) {
  return (
    <footer className={cn('w-full', className)}>
      <Shell className="grid gap-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          <div className="col-span-2 flex flex-col gap-3">
            <div>
              <p className="font-cal text-lg text-muted-foreground hover:text-foreground">
                {siteConfig.name}
              </p>
              <p className="mt-2 text-sm font-light text-muted-foreground">
                We are on a mission to provide a reliable, easy and fast way to
                launch your products.
              </p>
            </div>
            <StatusWidget slug="status" />
          </div>
          <div className="order-2 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Resources</p>
            <FooterLink href="/blog" label="Blog" />
            <FooterLink href="/pricing" label="Pricing" />
            <FooterLink href="https://overdocs.mintlify.app" label="Docs" />
            <FooterLink href="/" label="OSS Friends" />
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Company</p>
            <FooterLink href="/about" label="About" />
            <FooterLink href="/changelog" label="Changelog" />
            <FooterLink href="/legal/terms" label="Terms" />
            <FooterLink href="/legal/privacy" label="Privacy" />
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm">
            <p className="font-semibold text-foreground">Credits</p>
            <FooterLink
              href="https://github.com/saasykits/next-lucia-auth"
              label="Saasykits"
            />
            <FooterLink
              href="https://github.com/mickasmt/next-saas-stripe-starter"
              label="Mickasmt"
            />
          </div>
        </div>
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            {socialsConfig.map(({ title, href, icon }) => (
              <SocialIconButton key={title} {...{ href, icon, title }} />
            ))}
          </div>
          <div className="text-right md:text-left">
            <ThemeToggle />
          </div>
        </div>
      </Shell>
    </footer>
  )
}

interface FooterLinkProps {
  href: string
  label: string
  external?: boolean
}

function FooterLink({ href, label, external = false }: FooterLinkProps) {
  const isExternal = external || href.startsWith('http')

  const LinkSlot = isExternal ? 'a' : Link

  const externalProps = isExternal
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  return (
    <LinkSlot
      className="inline-flex items-center text-muted-foreground underline underline-offset-4 hover:text-foreground hover:no-underline"
      href={href}
      {...externalProps}
    >
      {label}
      {isExternal ? <ArrowUpRight className="ml-1 size-4 shrink-0" /> : null}
    </LinkSlot>
  )
}
