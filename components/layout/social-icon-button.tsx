import type { Social } from '@/config/socials'
import Link from 'next/link'
import { Icons } from '../icons'
import { Button } from '../ui/button'

export function SocialIconButton({ href, title, icon }: Social) {
  const Icon = Icons[icon]

  return (
    <Button asChild size="icon" variant="outline">
      <Link href={href} target="_blank" rel="noreferrer">
        <span className="sr-only">{title}</span>
        <Icon className="size-4" />
      </Link>
    </Button>
  )
}
