import type { FeatureDescription } from '@/config/features'
import { cn } from '@/lib/utils'
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

export function CardHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      {children}
    </div>
  )
}

export function CardIcon({ icon }: { icon: ValidIcon }) {
  const Icon = Icons[icon]
  return (
    <div className="rounded-full border border-border p-2">
      <Icon className="h-5 w-5" />
    </div>
  )
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="bg-gradient-to-tl from-[hsl(var(--muted))] from-0% to-[hsl(var(--foreground))] to-40% bg-clip-text text-center font-cal text-3xl text-transparent">
      {children}
    </h3>
  )
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-center text-muted-foreground">{children}</p>
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
          <FeatureIcon className="mb-1 mr-1.5 inline-flex h-4 w-4 text-foreground/80" />
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
