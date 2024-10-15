import Image from "next/image";
import localFont from "next/font/local";
import React, { useEffect, useState } from 'react'
import CourseItem from './courses/course-item'

type courseType = {
  imgPath: string;
  id: number;
  title: string;
  descrition: string;
  price: number;
}

export default function Home() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
      getCourses()
      // console.log(courses);
  }, [])
  
  const getCourses = async()=>{
      fetch('/database.json')
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
        <h1 className="text-5xl mb-1">🎇Announced Courses✨</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-6 lg:grid-cols-8  gap-10">
        {courses.map((item:courseType)=>(<CourseItem key={item.id} data={{...item,hideButton:true, layout: 'sm'} }  />))}
    </div>
    <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">Your Courses</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-10">
        {courses.map((item:courseType)=>(<CourseItem key={item.id} data={item} />))}
    </div>
</>  
)
}
