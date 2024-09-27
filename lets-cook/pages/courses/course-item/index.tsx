import React from 'react'
import { useRouter } from "next/router";
// import Link from 'next/link';

type CourseItemProps = {
  data: {
    imgPath: string;
    id: number;
    title: string;
    descrition: string;
    price: number;
  };
}

const CourseItem: React.FC<CourseItemProps> = ({data}) => {
  const router = useRouter()
  // console.log(JSON.stringify(data));

  const visitCourse = (id:number)=>{
    router.push("/courses/" + id)
  }

  return (
    <div key={data?.id} className="bg-gray-800 border-solid rounded-md border-gray-600">
        <div style={{height:"90%", margin: "20px"}}>
            <img src={data?.imgPath} />
        </div>
        <div className='flex justify-center items-center'>
        <button onClick={()=>{visitCourse(data.id)}} className='bg-red-500 text-white rounded-full border-2 border-white px-4 py-2 hover:bg-green-500'>
        Register
        </button>
        </div>
    </div>
  )
}

export default CourseItem