import React from 'react'

const Header = ({ children }) => {
  return (
    <div className="bg-gray-400 flex items-center pb-6">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-2 mt-2'>Find Images</h1>
        {children}
      </div>
    </div>
  )
}

export default Header