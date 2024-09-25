import React from 'react'

const Courses = () => {
  return (<>
    <div>Courses</div>
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-4">
    <div className="bg-black-200">
        <div style={{height:"90%"}}>
            <img src="/img/course1.jpg" />
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-red-500 text-white rounded-full border-2 border-white px-4 py-2'>
        Register
        </button>
        </div>
    </div>
    <div className="bg-black-200">
        <div style={{height:"90%"}}>
            <img src="/img/course2.jpg" />
        </div>
        <div className='flex justify-center items-center'>
        <button className='bg-red-500 text-white rounded-full border-2 border-white px-4 py-2'>
        Register
        </button>
        </div>
    </div>

    </div>
</>  
)
}

export default Courses