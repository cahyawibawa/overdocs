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
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          <div className="order-4 md:order-1">
            <StatusWidget slug="status" />
          </div>
          <div className="order-1 flex flex-col gap-3 text-sm md:order-2">
            <p className="font-semibold text-foreground">Community</p>
            <FooterLink
              href={siteConfig.links.github}
              label="GitHub"
              external
            />
          </div>
          <div className="order-2 flex flex-col gap-3 text-sm md:order-3">
            <p className="font-semibold text-foreground">Resources</p>
            <FooterLink href="/blog" label="Blog" />
            <FooterLink href={siteConfig.links.docs} label="Docs" />
          </div>
          <div className="order-3 flex flex-col gap-3 text-sm md:order-4">
            <p className="font-semibold text-foreground">Credits</p>
            <FooterLink href="https://ui.shadcn.com/" label="uishadcn" />
            <FooterLink href="https://www.openstatus.dev/" label="openstatus" />
            <FooterLink href="https://mintlify.com/" label="mintlify" />
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
      {isExternal ? <ArrowUpRight className="ml-1 h-4 w-4 shrink-0" /> : null}
    </LinkSlot>
  )
}
