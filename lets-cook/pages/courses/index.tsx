import React, { useEffect, useState } from 'react'
import CourseItem from '../../components/course-item'

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

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses()
        // console.log(courses);
    }, [])
    
    const getCourses = async()=>{
        fetch('/api/courses')
        .then(response => response.json())
        .then(data => {
            setCourses(data)
        })
        .catch(error => {
            // Handle errors here
            console.error('Error:',   
        error);
        });
    }

  return (<>
    <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">Courses</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-10">
        {courses.map((item:courseType)=>(<CourseItem key={item.id} data={{...item,hideButton:true, layout: 'sm', showDate:false}} />))}
    </div>
</>  
)
}

export default Courses