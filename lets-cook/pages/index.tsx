// import Image from "next/image";
// import localFont from "next/font/local";
import React, { useEffect, useState } from 'react'
import CourseItem from '../components/course-item'

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

export default function Home() {
  const [upcomingCourses, setUpcomingCourses] = useState([]);
  const [subscribedCourses, setSubscribedCourses] = useState([]);

  useEffect(() => {
      getUpcomingCourses();
      getSubscribedCourses();
  }, [])

  const passTimeStamp = ():string=>{
    return '&timestamp='+Date.now();
  }
  
  const getUpcomingCourses = async()=>{
      fetch('/api/courses?type=upcoming')
      .then(response => response.json())
      .then(data => {
          setUpcomingCourses(data)
      })
      .catch(error => {
          console.error('Error:',error);
          setUpcomingCourses([]);
      });
  }

  const getSubscribedCourses = async()=>{
    fetch('/api/courses?type=subscribed'+passTimeStamp)
    .then(response => response.json())
    .then(data => {
        setSubscribedCourses(data)
    })
    .catch(error => {
        console.error('Error:',error);
        setSubscribedCourses([]);
    });
}

    return (<>
    { upcomingCourses.length > 0 ?
    <>
    <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">🎇Announced Courses✨</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-8  gap-10">
        {upcomingCourses.map((item:courseType)=>(<CourseItem key={item.id} data={{...item,hideButton:true, layout: 'sm', showDate:true} }  />))}
    </div>
    </>
    : ""
    }
    <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">Your Courses</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-10">
        {subscribedCourses.map((item:courseType)=>(<CourseItem key={item.id} data={{...item,hideButton:true, layout: 'md', showDate:false}} />))}
    </div>
</>  
)
}
