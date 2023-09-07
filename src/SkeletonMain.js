import React from 'react'

const SkeletonMain = () => {
  return (
    <div className='flex flex-col gap-4 justify-between rounded-md overflow-hidden animate-pulse shadow-md'>
        <div className='aspect-[2/1] bg-gray-500 w-full'></div>
        <div className='bg-gray-500 h-8 w-[60%] ml-4'></div>
        <div className='flex flex-col gap-3 p-4'>
            <div className='w-[80%] bg-gray-500 h-6'></div>
            <div className='w-[80%] bg-gray-500 h-6'></div>
            <div className='w-[80%] bg-gray-500 h-6'></div>
        </div>
    </div>
  )
}

export default SkeletonMain