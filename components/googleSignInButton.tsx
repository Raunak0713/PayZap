import { Button } from './ui/button'
import { signIn } from '@/app/utils/auth'
import { FaGooglePlusG } from "react-icons/fa";

const GoogleSignInButton = () => {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <Button className='w-full' variant={"destructive"} type="submit">
        <FaGooglePlusG size={5} />
        Sign In with Google
      </Button>
    </form>
  )
}

export default GoogleSignInButton