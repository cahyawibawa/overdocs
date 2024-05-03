'use client'

import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import type { ValidIcon } from '../icons'
import { Icons } from '../icons'

const linkVariants = cva(
  'group flex w-full min-w-[200px] items-center rounded-md border px-3 py-1 text-muted-foreground',
  {
    variants: {
      variant: {
        default: 'border-transparent hover:bg-muted/50 hover:text-foreground',
        active: 'border-border bg-muted/50 font-medium text-foreground',
        disabled: 'pointer-events-none border-transparent opacity-60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface AppLinkProps extends LinkProps {
  label: string
  icon?: ValidIcon
  className?: string
  active?: boolean
  disabled?: boolean
}

export function AppLink({
  label,
  href,
  icon,
  disabled,
  className,
  active,
  ...props
}: AppLinkProps) {
  const Icon = icon && Icons[icon]

  const variant = disabled ? 'disabled' : active ? 'active' : 'default'

  return (
    <Link
      href={href}
      className={cn(linkVariants({ variant, className }))}
      aria-disabled={disabled}
      {...props}
    >
      {Icon ? <Icon className={cn('mr-2 size-4')} /> : null}
      {label}
    </Link>
  )
}
