'use client'

import { OrganizationList, useOrganization } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Onboarding = () => {
  const { organization } = useOrganization()
  const router = useRouter()

  useEffect(() => {
    if (organization) {
      router.push(`/organization/${organization.slug}`)
    }
  }, [organization])

  return (
    <div className='flex items-center justify-center h-screen'>
      <OrganizationList
        hidePersonal 
        afterCreateOrganizationUrl="/organization/:slug"
        afterSelectOrganizationUrl="/organization/:slug"
      />
    </div>
  )
}

export default Onboarding