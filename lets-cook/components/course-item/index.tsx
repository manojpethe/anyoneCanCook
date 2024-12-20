import React from 'react'
import { useRouter } from "next/router";
import moment from 'moment';
// import Link from 'next/link';


type CourseItemProps = {
  data: {
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
    hideButton?: boolean;
    layout?: string;
    showDate?: boolean;
  }
}

const CourseItem: React.FC<CourseItemProps> = ({data}) => {
  const router = useRouter()

  const visitCourse = (id:number)=>{
    router.push("/courses/" + id)
  }

  return (
    <div key={data?.id} className="bg-gray-800 border-solid rounded-md border-gray-600 cursor-pointer">
        <div className='m-7'>
            <img onClick={()=>{visitCourse(data.id)}} src={data?.imgpath} />
        { data.showDate ? <div className='text-center p-1 text-xl'>{moment(data?.scheduledate).format('Do MMMM')}</div> : "" }

        </div>
        { !data.hideButton ? 
        <div className='flex justify-center items-center'>
        <button onClick={()=>{visitCourse(data.id)}} className='bg-red-500 text-white rounded-full border-2 border-white px-4 py-2 hover:bg-green-500'>
        View
        </button>
        </div>
        : "" 
        }
    </div>
  )
}

export default CourseItem