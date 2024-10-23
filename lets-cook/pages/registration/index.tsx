import React from 'react'

const Registration = () => {
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
            <p className="font-normal text-gray-700 dark:text-gray-800">Send mentioned amount using any UPI app.</p>
            <p className="font-normal text-gray-700 dark:text-gray-800">तुम्हाला हव्या असलेल्या कोर्स ची फी UPI app वापरुन 9823949841 ला पाठवा.</p>
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
            <p className="font-normal text-gray-700 dark:text-gray-800">All recorded courses are on Facebook group. Join the requested group using facebook.</p>
            <p className="font-normal text-gray-700 dark:text-gray-800">सर्व recorded क्लास फेसबूक ग्रुप वर आहेत. तुम्हाला जो ग्रुप कळवण्यात येईल तो join करावा लागेल.</p>
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