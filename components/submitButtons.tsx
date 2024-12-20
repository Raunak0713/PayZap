"use client"
import { useFormStatus } from 'react-dom'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'


const SubmitButtons = () => {
  const { pending } = useFormStatus()
  return (
    <div>
      {pending ? (
        <div>
          <Button disabled className='w-full'>
            <Loader2 className='size-4 mr-2 animate-spin'/>
            Please Wait....
          </Button>
        </div>
        
      ) : (
        <Button className='w-full' type='submit'>
          Submit
        </Button>
      )}
    </div>
  )
}

export default SubmitButtons 