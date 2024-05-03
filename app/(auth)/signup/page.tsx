import { SignUpForm } from '@/components/form/signup-form'
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
  title: 'Sign Up',
  description: 'Sign up to your account',
}
export default async function SignupPage() {
  const { user } = await validateRequest()

  if (user) {
    return redirect('/')
  }
  return (
    <Card className="w-full max-w-md">
      <CardHeader2 className="text-center">
        <CardTitle2 className="text-2xl">Create your account</CardTitle2>
        <CardDescription>Sign up to get started</CardDescription>
      </CardHeader2>
      <CardContent2 className="grid gap-4">
        <SignUpForm />
      </CardContent2>
      {/* <CardFooter>
        <Button className="w-full">Sign in</Button>
      </CardFooter> */}
    </Card>
  )
}
