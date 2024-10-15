import Link from 'next/link'
import React from 'react'
import PanelItem from './panel-item'

const AdminPanel = () => {
  return (
    <div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10">
      <div className="bg-gray-900 rounded-3xl">
      <header className="text-center mb-8 mt-8">
        <h1 className="text-5xl mb-1 ra">Admin Console</h1>
      </header>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-6  gap-10">
      <PanelItem data={{icon:"+",label:"Add Course", link:"/admin/addCourse"}} />
      <PanelItem data={{icon:"✔",label:"Approve Subscription", link:"/admin/approve"}} />
    </div>
      </div>
    </div>
  )
}

export default AdminPanel