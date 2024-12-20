import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from '../utils/auth'

const LoginPage = () => {
  return (
    <>
      <div className='flex h-screen w-full items-center justify-center px-4'>
        <Card className='max-w-sm'>
          <CardHeader>
            <CardTitle className='text-2xl'>Login</CardTitle>
            <CardDescription>Enter your email to login into your account</CardDescription>
          </CardHeader>
          <CardContent>
            <form 
              action={async () => {
                  "use server" 
                  await signIn()
              }} 
              className='flex flex-col gap-y-4'>
                <div className='flex flex-col gap-y-2'>
                  <Label>Email</Label>
                  <Input placeholder='hello@hello.com'/>
                </div>
                <Button>Submit</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default LoginPage