import React from 'react'

export default function Page({ params }) {
  return (
    <div>
      <p>page</p>
      <p>{params.service}</p>
    </div>
  )
}
