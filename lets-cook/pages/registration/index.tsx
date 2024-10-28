import {useEffect, useState} from 'react'
import { useRouter } from 'next/router';

interface Course {
  id:number;
  title:string;
  price:number;
  fbgrouplink:string;
}

const Registration = () => {
  const router = useRouter();
  const {id} = router.query;
  const [courseId, setCourseId] = useState(0);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [fbgrouplink, setFbgrouplink] = useState("");

  const getCourse = (id:unknown)=>{
    fetch('/api/courses/'+id)
    .then(response => response.json())
    .then(data => {
        setCourseId(data?.id);
        setTitle(data?.title);
        setPrice(data?.price);
        setFbgrouplink(data.fbgrouplink);
    })
    .catch(error => {
        console.error('Error:',error);
    });
}

useEffect(() => {
  getCourse(id);
}, [id])


  return (

<div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10 h-fit">

      <div className="bg-gray-900 rounded-3xl">
        <header className="text-center mb-8 mt-8">
            <h1 className="text-5xl mb-1">Payment & Registration</h1>
        </header>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4  gap-10 m-5 ">
        <div>
            <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-200 dark:border-gray-700 dark:hover:bg-yellow-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">Step 1 # Pay using Gpay / PhonePe</h5>
            <p className="font-normal text-gray-700 dark:text-gray-800">Send Rs. {price} amount using any UPI app.</p>
            <div className="font-normal text-gray-700 dark:text-gray-800"><span className='text-purple-950 text-2xl' > {title} </span> ह्या कोर्स ची फी <span className='text-2xl text-green-700' > Rs.{price} </span>
             UPI app वापरुन 9823949841 ला पाठवा.</div>
            </div>
        </div>
        <div>
        	<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-200 dark:border-gray-700 dark:hover:bg-yellow-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">Step 2 # Share Payment details</h5>
            <p className="font-normal text-gray-700 dark:text-gray-800">Share Payment Details <a  target='_new' href="https://wa.me/919823949841">https://wa.me/919823949841</a></p>
            <p className="font-normal text-gray-700 dark:text-gray-800">तुम्ही payment केल्याचा screenshot वरील whatsapp लिंक वरुण पाठवा आणि कुठला course करायचा आहे ते सुद्धा कळवा.</p>
            </div>
        </div>
        <div>
        	<div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-200 dark:border-gray-700 dark:hover:bg-yellow-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">Step 3 # Facebook group membership</h5>
            <p className="font-normal text-gray-700 dark:text-gray-800">Recorded Courses are on Facebook group. 
              <p/><span className='text-blue-700'>Please Join this group:</span> <a target='_new' href={fbgrouplink} >{fbgrouplink}</a></p>
              &nbsp;<p/>
            <p className="font-normal text-gray-700 dark:text-gray-800">हा recorded क्लास फेसबूक ग्रुप वर आहेत. वरील ग्रुप join करावा लागेल. joining request approve झाल्यावर कोर्स बघू शकता. request साधारण पुढील 4 तासात approve होईल.</p>
            </div>
        </div>
        <div>
        <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-yellow-200 dark:border-gray-700 dark:hover:bg-yellow-100">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-800">Step 4 # Video & Recipe Cards</h5>
            <p className="font-normal text-gray-700 dark:text-gray-800">Please download recipe cards & keep them with you for future reference. You will have access to videos for a month.</p>
            <p className="font-normal text-gray-700 dark:text-gray-800">कृपया रेसिपी कार्ड download करून ठेवा, म्हणजे भविष्यात वापरता येतील. विडियो महिनाभर कधीही बघू शकता.</p>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Registration