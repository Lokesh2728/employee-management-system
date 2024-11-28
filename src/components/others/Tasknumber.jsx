import React from 'react'

function Tasknumber({data}) {
  return (
    <div className='flex justify-between gap-5 screen mt-5'>
      <div className='p-10  w-[45%] bg-red-400 px-9 py-6 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
      <h3 className='text-xl font-medium'>New Task</h3>
      </div>
      <div className='p-10  w-[45%] bg-blue-400 px-9 py-6 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
      <h3 className='text-xl font-medium'>Completed task</h3>
      </div>
      <div className='p-10  w-[45%] bg-green-600 px-9 py-6 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
      <h3 className='text-xl font-medium'>Accepted Task</h3>
      </div>
      <div className='p-10  w-[45%] bg-yellow-400 px-9 py-6 rounded-xl'>
      <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
      <h3 className='text-xl font-medium'>Failed Task</h3>
      </div>
    </div>
  )
}

export default Tasknumber
