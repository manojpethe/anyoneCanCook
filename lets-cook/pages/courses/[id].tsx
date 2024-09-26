import React from 'react'
import { useRouter } from 'next/router';

const ShowCourse = () => {
  const router = useRouter();
  const { id } = router.query;

  // Use the id value here
  console.log('ID:', id);

  return (
    <div className="py-10 xl:px-80 md:px-40 sm:px-10 xs:px-10">
      <div className="bg-gray-900">
      <h1>Dynamic Route with ID: {id}</h1>
      </div>
    </div>
  )
}

export default ShowCourse