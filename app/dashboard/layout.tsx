import React from 'react'
import requireUser from '../utils/hooks'
import Link from 'next/link'
import Logo from "../../public/logo.png"
import Image from 'next/image'
import { DashboardLinks } from '@/components/dashboardLinks'

const DashboardLayout = async ({ children } : { children : React.ReactNode }) => {
  const session = await requireUser()
  return (
    <>
      <div className='grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]'>
        <div className='hidden border-r bg-muted/40 md:block'>
          <div className='flex flex-col max-h-screen h-full gap-2'>
            <div className='h-14 flex items-center border-b px-4 lg:h-[60px lg:px-6'>
              <Link href={"/"} className='flex items-center gap-2 mx-auto'>
                <Image src={Logo} alt='Logo' className='size-7' />
                <p className='text-2xl font-bold'>
                  Pay<span className='text-blue-600'>Zap</span>
                </p>
              </Link>
            </div>
            <div className="flex-1">
              <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                <DashboardLinks />
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardLayout