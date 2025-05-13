
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React, {  } from 'react'
import { Button } from './ui/button'
import { PenBox } from 'lucide-react'
import UserMenu from './UserMenu'
import { checkUser } from '@/lib/checkUser'

const Header = async () => {
  await checkUser()

  return (
    <header className="container mx-auto sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sm:px-6 lg:px-8">
      <nav className="flex flex-wrap items-center justify-between h-20">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2">
            <Image
              src="/logo2.png"
              alt="logo"
              width={48}
              height={48}
              className="rounded-full h-12 w-12 sm:h-16 sm:w-16"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold">TaskForce</span>
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 mt-4 sm:mt-0">
          <Link href="/project/create">
            <Button size="sm" sm="lg" className="flex items-center gap-2">
              <PenBox size={20} className="" />
              <span className="text-sm sm:text-base font-semibold">
                Get Started
              </span>
            </Button>
          </Link>

          <SignedOut>
            <SignInButton forceRedirectUrl="/onboarding">
              <Button
                variant="outline"
                size="sm"
                className="text-sm sm:text-base"
              >
                Login
              </Button>
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
