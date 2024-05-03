import type { FeatureDescription } from '@/config/features'
import { cn } from '@/lib/utils'
import React from 'react'
import type { ValidIcon } from '../icons'
import { Icons } from '../icons'
import { Shell } from '../shell'
import { Badge } from './badge'

export function CardContainer({ children }: { children: React.ReactNode }) {
  return (
    <Shell className="flex flex-col gap-6 bg-gradient-to-br from-[hsl(var(--muted))] from-0% to-transparent to-20%">
      {children}
    </Shell>
  )
}

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

export function CardIcon({ icon }: { icon: ValidIcon }) {
  const Icon = Icons[icon]
  return (
    <div className="rounded-full border border-border p-2">
      <Icon className="size-5" />
    </div>
  )
}

export function CardTitle3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="bg-gradient-to-tl from-[hsl(var(--muted))] from-0% to-[hsl(var(--foreground))] to-40% bg-clip-text text-center font-cal text-3xl text-transparent">
      {children}
    </h3>
  )
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-sm text-muted-foreground">{children}</p>
}
export function CardDescription2({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-sm text-muted-foreground">{children}</p>
}

export function CardContent({
  children,
  dir = 'cols',
}: {
  children: React.ReactNode
  dir?: 'rows' | 'cols'
}) {
  return (
    <div
      className={cn('grid gap-10', {
        'grid-cols-none md:grid-cols-2': dir === 'cols',
        'grid-rows-none md:grid-rows-2': dir === 'rows',
      })}
    >
      {children}
    </div>
  )
}

export function CardFeatureContainer({
  children,
  dir = 'rows',
}: {
  children: React.ReactNode
  dir?: 'rows' | 'cols'
}) {
  return (
    <ul
      className={cn('gap-4 md:gap-6', {
        'grid md:grid-cols-3': dir === 'cols',
        'flex flex-col': dir === 'rows',
      })}
    >
      {children}
    </ul>
  )
}

// TODO: rename type a bit appropriately
export function CardFeature(props: FeatureDescription) {
  const FeatureIcon = Icons[props.icon]
  return (
    <li>
      <p className="flex flex-col">
        <span>
          <FeatureIcon className="mb-1 mr-1.5 inline-flex size-4 text-foreground/80" />
          <span className="font-medium text-foreground">
            {props.catchline.replace('.', '')}
          </span>{' '}
        </span>
        <span className="text-muted-foreground">{props.description}</span>
      </p>
      {props.badge ? (
        <Badge variant="secondary" className="-ml-2 mt-1">
          {props.badge}
        </Badge>
      ) : null}
    </li>
  )
}

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
))
Card.displayName = 'Card'

// eslint-disable-next-line react/display-name
const CardTitle2 = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
))
CardTitle.displayName = 'CardTitle'

// eslint-disable-next-line react/display-name
const CardContent2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center p-6 pt-0', className)}
    {...props}
  />
))
CardFooter.displayName = 'CardFooter'

// eslint-disable-next-line react/display-name
const CardHeader2 = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

export {
  Card,
  CardHeader,
  CardTitle,
  CardTitle2,
  CardContent2,
  CardHeader2,
  CardFooter,
}
