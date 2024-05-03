'use client'

import { signOut } from '@/actions/auth-actions'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Loader } from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'
import { Icons } from '../icons'
import { Button } from '../ui/button'

// interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
//   user: Pick<User, "name" | "image" | "email">
// }

export const UserAccountNav = ({
  email,
  className,
}: {
  email: string
  className?: string
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={className}>
        <Button variant="ghost" className="relative size-8 rounded-full">
          <Avatar className="size-8">
            <AvatarImage
              src="https://source.boringavatars.com/marble/60/"
              alt="Avatar"
            />
            <AvatarFallback>ava</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {/* <p className="text-sm font-medium leading-none">shadcn</p> */}
            <p>{email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem disabled>
            Profile
            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Billing
            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
          </DropdownMenuItem>
          <DropdownMenuItem disabled>
            Settings
            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel className="p-0 text-muted-foreground">
          <SignoutConfirmation />
          {/* <form action={signOut}>
            <Button type="submit" className="rounded-full">
              Sign out
            </Button>
          </form> */}
        </DropdownMenuLabel>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

const SignoutConfirmation = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignout = async () => {
    setIsLoading(true)
    try {
      await signOut()
      toast('Signed out successfully')
    } catch (error) {
      if (error instanceof Error) {
        toast(error.message, {
          icon: <Icons.play className="size-4 text-destructive" />,
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <button className="p-2" disabled={isLoading} onClick={handleSignout}>
      {isLoading ? <Loader className="mr-2 size-4 animate-spin" /> : 'Sign out'}
    </button>
  )
}
