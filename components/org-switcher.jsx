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
                    variables: {
                        colorPrimary: "white",
                        colorText: "black",
                        fontSize: "1rem",
                        fontFamily: "Roboto, sans-serif",
                        colorNeutral: "black",
                        fontWeight: "700",
                        colorShimmer: "red",
                        
                    },
                    elements: {
                        organizationSwitcherTrigger: {
                            backgroundColor: "transparent",
                            borderRadius: "0.5rem",
                            boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
                            padding: "0.8rem 1.2rem",
                            fontWeight: "700",
                            color: "black",
                            border: "1px solid black",
                        },
                    }
                }}
            />
        </SignedIn>
    </div>
  )
}

export default OrgSwitcher