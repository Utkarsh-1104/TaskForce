import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import UserMenu from './UserMenu'

const Header = () => {
  return (
    <header className='container mx-auto'>
      <nav className='flex items-center justify-between'>
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={300} height={10} className='h-24 w-auto object-contain' />
        </Link>

        <div className='flex items-center gap-4 '>
          <Link href="/project/create">
            <Button variant="destructive" className="flex items-center gap-2 cursor-pointer">
              <PenBox size={18} />
              <span>
                Create Project
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