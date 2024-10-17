import React, {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';

type courseType = {
  id: number;
  title: string;
  description: string;
  price: number;
  imgpath: string;
  scheduledate: string;
  duration: number;
  meetinglink: string;
  fbgrouplink: string;
  published?: boolean;
  bestseller?: boolean;
}

const ShowCourse = () => {
  const router = useRouter();
  const initialCourse:courseType={ imgpath: "", id: 0, title:"", description: "", price: 0, bestseller:false, published:true, duration:0,fbgrouplink:"",meetinglink:"", scheduledate:"2024-10-17" };
  const [course, setCourse] = useState(initialCourse);
  const { id } = router.query;


  useEffect(()=>{
    getCourses(id);
  },[id])

  const getCourses = async(id:unknown)=>{
    fetch(`/api/courses/${id}`)
    .then(response => response.json())
    .then(data => {
        setCourse(data);
    })
    .catch(error => {
        // Handle errors here
        console.error('Error:',error);
    });
  }

  return (
    <div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10">
      <div className="bg-gray-900">
      <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">{course?.title}</h1>
      </header>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2  xl:grid-cols-2 gap-1'>
        <div className='flex justify-center items-center px-4'><img src={course?.imgpath} /></div>
        <div className='text-white px-4'>
        <div className='flex justify-center items-center text-white text-5xl px-4'>
            ₹{course?.price}&nbsp;
          <button className='text-sm bg-red-500 text-white rounded-full border-2 border-white px-4 py-2 hover:bg-green-500'>
          Pay & Register
          </button>
        </div>
        <p/>
        <span className='font-semibold'>More Information:</span>
        <p/>{course?.description}

        </div>
      </div>
      {/* <div>{JSON.stringify(course)}</div> */}
      </div>
    </div>
  )
}


export default ShowCourse