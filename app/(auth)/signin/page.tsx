import { SignInForm } from '@/components/form/signin-form'
import {
  Card,
  CardContent2,
  CardDescription,
  CardHeader2,
  CardTitle2,
} from '@/components/ui/card'
import { validateRequest } from '@/lib/lucia'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Log In',
  description: 'Log in to your account',
}
export default async function SigninPage() {
  const { user } = await validateRequest()
  if (user) {
    return redirect('/')
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader2 className="text-center">
        <CardTitle2 className="text-2xl">Log In</CardTitle2>
        <CardDescription>Log in to your account</CardDescription>
      </CardHeader2>
      <CardContent2 className="grid gap-3">
        <SignInForm />
      </CardContent2>
      {/* <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter> */}
    </Card>
  )
}
