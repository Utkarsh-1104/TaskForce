import React from 'react'

const Organization = ({params}) => {
    const {orgId} = params
  return (
    <div>
        {orgId}
        <h1 className='text-3xl font-bold'>Organization</h1>
    </div>
  )
}

export default Organization