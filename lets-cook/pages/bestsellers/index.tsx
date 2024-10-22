import {useEffect, useState} from 'react'
import CourseItem from '../courses/course-item';


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

const BestSellers = () => {
  const [bestsellerCourses, setBestsellerCourses] = useState([]);

  const getBestsellerCourses = async()=>{
    fetch('/api/courses?type=bestseller')
    .then(response => response.json())
    .then(data => {
        setBestsellerCourses(data)
    })
    .catch(error => {
        console.error('Error:',error);
        setBestsellerCourses([]);
    });
  }

  useEffect(() => {
    getBestsellerCourses();
  }, [])
  


  return (
    <div className="xl:px-80 md:px-40 sm:px-10 xs:px-10">
    <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1">Bestseller courses</h1>
    </header>
    <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-10">
        {bestsellerCourses.map((item:courseType)=>(<CourseItem key={item.id} data={item} />))}
    </div>
    
    </div>
  )
}

export default BestSellers