import {useEffect, useState} from 'react'
import moment from 'moment'
import Link from 'next/link';

type Course = {
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

const CourseList = () => {
    const [courses, setCourses] = useState([])
    const getCourses = async()=>{
        fetch('/api/courses')
        .then(response => response.json())
        .then(data => {
            setCourses(data)
        })
        .catch(error => { console.error('Error:',error);});
    }

    useEffect(() => {
      getCourses()
    }, [])
    

  return (
    <div id="CourseList">
    <table className="table-auto w-full mt-10">
    <thead>
        <tr className='bg-purple-900 h-20'>
        <th className='w-10w-2/4 text-xl'>Couse Title</th>
        <th className='w-10w-1/4 text-xl'>Price</th>
        <th className='w-10w-1/4 text-xl'>Schedule Date</th>
        <th className='w-10w-1/4 text-xl'>Published</th>
        </tr>
    </thead>
    <tbody>
        { courses.map((item:Course)=>(
        <tr key={item.id} className='h-20'>
            <td className='text-center text-xl'><Link href={"/admin/editCourse?id="+item?.id}>{item?.title}</Link></td>
            <td className='text-center text-xl'>{item?.price}</td>
            <td className='text-center text-xl'>{moment(item?.scheduledate).format("DD-MMM-YYYY")}</td>
            <td className='text-center text-xl'>{item?.published ? "YES": "NO"}</td>
        </tr>
        )) }
    </tbody>
    </table>
    </div>
  )
}

export default CourseList