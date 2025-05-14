"use client"

import { OrganizationSwitcher, SignedIn } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'

const OrgSwitcher = () => {
    const pathname = usePathname()
  return (
    <div>
        <SignedIn>
            <OrganizationSwitcher 
                hidePersonal
                afterCreateOrganizationUrl="/organization/:slug"
                afterSelectOrganizationUrl="/organization/:slug"
                createOrganizationMode={
                    pathname === "onboarding" ? "navigation" : "modal"
                }
                createOrganizationUrl="/onboarding"
                appearance={{
                    elements: {
                        organizationSwitcherTrigger: "bg-gray-800 hover:bg-gray-900 text-white",
                        
                    }
                }}
            />
        </SignedIn>
    </div>
  )
}

export default OrgSwitcher