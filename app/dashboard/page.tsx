import { Button } from '@/components/ui/button'
import { signOut } from '../utils/auth'
import requireUser from '../utils/hooks'

const DashboardPage = async () => {
  const session = await requireUser()
  return (
    <div>
      DashboardPage
      <form
        action={async () => {
          "use server"
          await signOut()
        }}
      >
        <Button type="submit">Sign Out</Button>
      </form>
    </div>
  )
}

export default DashboardPage