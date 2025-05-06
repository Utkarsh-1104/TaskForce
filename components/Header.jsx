import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { BarChart3, PenBox } from 'lucide-react'
import UserMenu from './UserMenu'

const Header = () => {
  return (
    <header className='container h-18 mx-auto sticky top-5 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <nav className='flex items-center justify-between'>
        <Link href="/">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Image src="/logo2.png" alt="logo" width={300} height={100} className='rounded-full h-16 w-16' />
            <span className='text-2xl'>TaskForce</span>
          </div>
        </Link>

        <div className='flex items-center gap-4 '>
          <Link href="/project/create">
            <Button variant="default" className="flex items-center gap-2 cursor-pointer">
              <PenBox size={18} />
              <span>
                Get Started
              </span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl='/onboarding'>
              <Button variant="outline" className="cursor-pointer">Login</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
              <UserMenu />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header