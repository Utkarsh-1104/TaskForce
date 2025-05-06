"use client"

import { UserButton } from '@clerk/nextjs'
import { ChartNoAxesGantt } from 'lucide-react'
import React from 'react'

const UserMenu = () => {
  return (
    <UserButton appearance={{
        elements: {
            avatarBox: "",
        }
    }}>
        <UserButton.MenuItems>
            <UserButton.Link
                label='My Organisation'
                labelIcon={<ChartNoAxesGantt size={16} />}
                href='/onboarding'
            />
            <UserButton.Action label='manageAccount' />
        </UserButton.MenuItems>
    </UserButton>
  )
}

export default UserMenu