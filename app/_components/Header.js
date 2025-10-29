"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Authentication from './Authentication'
import { useAuthContext } from '../provider'
import Link from 'next/link'
function Header() {
  const {user} = useAuthContext();
  return (
    <div className='p-4 shadow-md flex items-center justify-between'>
    <div className='flex items-center gap-3'>
      <Image 
      src={'/logo.svg'} 
      alt='logo'
      height={40}
      width={40}     />
      <h2 className='text-2xl font-bold'>Space KC</h2>
    </div>
    <div>
      {!user? <Authentication>
      <Button className="cursor-pointer">Get Started</Button>
      </Authentication>
      :
      <div className='flex items-center gap-3'>
        <Link href={'/dashboard'}>
        <Button>Dashboard</Button>
        </Link>
        <Image src={user?.photoURL} alt='userimage' width={40} height={40} className='rounded-full'/>
      </div>
      }
        
    </div>
    </div>
  )
}

export default Header
