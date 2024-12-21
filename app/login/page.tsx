import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import SubmitButton from '@/components/submitButtons'
import { auth, signIn } from '../utils/auth'
import { redirect } from 'next/navigation'
import GoogleSignInButton from '@/components/googleSignInButton'

const LoginPage = async () => {
  const session = await auth()
  if (session?.user) {
    redirect("/dashboard")
  }

  return (
    <>
      <div className="flex h-screen w-full items-center justify-center px-4">
        <Card className="max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Continue with google or  magic link on your email</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <GoogleSignInButton />
              <div className="flex items-center gap-x-2">
                <div className="h-px flex-grow bg-gray-300"></div>
                <span className="text-gray-500 text-sm">OR</span>
                <div className="h-px flex-grow bg-gray-300"></div>
              </div>
              <form
                action={async (formData) => {
                  "use server"
                  await signIn("nodemailer", formData)
                }}
                className="flex flex-col gap-y-4"
              >
                <div className="flex flex-col gap-y-2">
                  <Label>Email</Label>
                  <Input name="email" type="email" required placeholder="hello@hello.com" />
                </div>
                <SubmitButton text="Login" />
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default LoginPage
