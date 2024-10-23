"use client";
// import { useRef } from "react";
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router';
import {useEffect, useState} from 'react'
import moment from 'moment';


type Course = {
    id?: number;
    title: string;
    description: string;
    price: number;
    imgpath: string;
    scheduledate: string;
    duration: number;
    meetinglink: string;
    fbgrouplink: string;
    published: boolean;
    bestseller:boolean;
}

const editCourse = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    // const fileInput = useRef<HTMLInputElement>(null);
    const cssLabel = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
    const cssInput = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';
    const searchParams = useSearchParams();
    const id = searchParams.get('id')||0;
    const [courseId, setCourseId] = useState(0);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(0);
    const [imgpath, setImgpath] = useState("/img/course2.jpg");
    const [scheduledate, setScheduledate] = useState("2024-10-16");
    const [duration, setDuration] = useState(0);
    const [meetinglink, setMeetinglink] = useState("");
    const [fbgrouplink, setFbgrouplink] = useState("");
    const [published, setPublished] = useState(false);
    const [bestseller,setBestseller] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        getCourse(id)
    }, [id])
    
    const getCourse = (id:unknown)=>{
        fetch('/api/courses/'+id)
        .then(response => response.json())
        .then(data => {
            setCourseId(data?.id);
            setTitle(data?.title);
            setDescription(data?.description);
            setPrice(data?.price);
            setPrice(data?.price);
            setImgpath(data?.imgpath);
            setScheduledate(moment(data?.scheduledate).format("YYYY-MM-DD"));
            setDuration(data?.duration);
            setMeetinglink(data?.meetinglink);
            setFbgrouplink(data?.fbgrouplink);
            setBestseller(data?.bestseller);
            setPublished(data?.published);
        })
        .catch(error => {
            console.error('Error:',error);
        });
    }

    const handleAddCourse = async()=>{
        const newCourse:Course = {
            id:courseId,
            title,
            description,
            price,
            imgpath,
            scheduledate,
            duration,
            meetinglink,
            fbgrouplink,
            published,
            bestseller
        }
        if(!courseId){
            saveCourse(newCourse);
        } else {
            updateCourse(newCourse);
        }
    }

    const updateCourse =async(course:Course)=>{
        fetch('/api/courses/'+courseId , {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json' // Set the appropriate content type
            },
            body: JSON.stringify(course) // Include the request body if necessary
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Success:', data);
            router.push("/admin/");

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    const saveCourse =async(course:Course)=>{
        fetch('/api/courses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set the appropriate content type
            },
            body: JSON.stringify(course) // Include the request body if necessary
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error ${response.status}`);
            }
            return response.json(); // Parse the response as JSON
        })
        .then(data => {
            console.log('Success:', data);
            router.push("/admin/");

        })
        .catch(error => {
            console.error('Error:', error);
        });
    }

    return (
        <div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10">
            <div className="bg-gray-900 rounded-3xl px-5">
                <header className="text-center mb-8 mt-8">
                    <h1 className="text-5xl mb-1 ra">{courseId ? "Edit": "Add"} Course</h1>
                </header>
                <form className="max-w-sm mx-auto">
                    {/* <div className="mb-5">
                        <input type="file" name="file" ref={fileInput} />
                    </div> */}
                    <div className="mb-5">
                        <label htmlFor="Title" className={cssLabel}>Course Title</label>
                        <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" id="Title" className={cssInput} placeholder="Give some name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Information" className={cssLabel}>Information</label>
                        <textarea value={description} onChange={(e)=>{setDescription(e.target.value)}} rows={5} id="Information" className={cssInput} placeholder="Describe the course" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="ImagePath" className={cssLabel}>Image Path</label>
                        <textarea value={imgpath} onChange={(e)=>{setImgpath(e.target.value)}} rows={5} id="ImagePath" className={cssInput} placeholder="Describe the course" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Price" className={cssLabel}>Price</label>
                        <input value={price} onChange={(e)=>{setPrice(parseInt(e.target.value))}} type="text" id="Price" className={cssInput} placeholder="Rs." required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Date" className={cssLabel}>Date</label>
                        <input value={scheduledate} onChange={(e)=>{setScheduledate(e.target.value)}} type="date" id="Date" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="duration" className={cssLabel}>Duration</label>
                        <input value={duration} onChange={(e)=>{setDuration(parseInt(e.target.value))}} type="number" id="duration" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="MeetingLink" className={cssLabel}>Meeting Link</label>
                        <input value={meetinglink} onChange={(e)=>{setMeetinglink(e.target.value)}} type="text" id="MeetingLink" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="VideoLink" className={cssLabel}>FB group Link</label>
                        <input value={fbgrouplink} onChange={(e)=>{setFbgrouplink(e.target.value)}} type="text" id="VideoLink" className={cssInput} required />
                    </div>
                    <div className="flex items-center mb-4">
                        <input checked={published} onChange={()=>{ setPublished(published ? false : true) }} id="published-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="published-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Published</label>
                    </div>
                    <div className="flex items-center">
                        <input checked={bestseller} onChange={()=>{ setBestseller(bestseller ? false : true) }} id="bestseller-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="bestseller-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Bestseller</label>
                    </div>
                    <div className='xl:flex space-x-1'>
                        <div className='mt-2 xl:w-1/2'>
                        <button onClick={()=>{handleAddCourse()}} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                        </div>
                        <div className='mt-2 xl:w-1/2'>
                        <button onClick={()=>{router.push("/admin/")}} type="button" className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Cancel</button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default editCourse

