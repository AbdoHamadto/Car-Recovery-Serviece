import React from 'react'

export default function TextArea({value, onChange, error, name}) {
  return (
    <div className='flex flex-col mb-6'>
      <label htmlFor="text-area" className='text-sm font-bold text-gray-700'>Message</label>
      <textarea 
        id="text-area"
        value={value}
        onChange={onChange}
        name={name}
        rows="7" 
        className={`mt-1 block w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:outline-none focus:border-primary sm:text-sm`}
        placeholder='write your message'
      ></textarea>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  )
}
