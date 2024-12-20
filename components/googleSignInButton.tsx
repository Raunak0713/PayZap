import { Button } from './ui/button'
import { signIn } from '@/app/utils/auth'

const GoogleSignInButton = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button className='w-full' variant={"destructive"} type="submit">Sign In with Google</Button>
    </form>
  )
}

export default GoogleSignInButton