import { getOrganization } from '@/actions/organization'
import OrgSwitcher from '@/components/org-switcher'
import React from 'react'

const Organization = async ({params}) => {
  const {orgId} = await params

  const organization = await getOrganization(orgId)

  if (!organization) {
    return (
      <div>
        <h1 className='text-3xl font-bold'>Organization not found</h1>
      </div>
    )
  }

  return (
    <div className='container mx-auto mt-10'>
      <div className='mb-4 flex flex-col sm:flex-row items-start justify-between'>
        <h1 className='text-5xl gradient-title pb-2 font-bold'>{organization.name}'s Project </h1>
        <OrgSwitcher />
      </div>
      <div className='mt-5'>

      </div>
    </div>
  )
}

export default Organization