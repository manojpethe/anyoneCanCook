import React from 'react'

const AddCourse = () => {
    const cssLabel = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white';
    const cssInput = 'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500';

    return (
        <div className="py-1 xl:px-80 md:px-40 sm:px-10 xs:px-10">
            <div className="bg-gray-900 rounded-3xl px-5">
                <header className="text-center mb-8 mt-8">
                    <h1 className="text-5xl mb-1 ra">Add Course</h1>
                </header>
                {/* <div>Title</div>
                <div>Poster</div>
                <div>Information</div>
                <div>Price</div>
                <div>Date</div>
                <div>Time</div>
                <div>Meeting Link</div>
                <div>Video Link</div>
                <div>Recipe Cards</div> */}
                <form className="max-w-sm mx-auto">
                    <div className="mb-5">
                        <label htmlFor="Title" className={cssLabel}>Course Title</label>
                        <input type="text" id="Title" className={cssInput} placeholder="Give some name" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Information" className={cssLabel}>Information</label>
                        <textarea rows={5} id="Information" className={cssInput} placeholder="Describe the course" required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Price" className={cssLabel}>Price</label>
                        <input type="text" id="Price" className={cssInput} placeholder="Rs." required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Date" className={cssLabel}>Date</label>
                        <input type="date" id="Date" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="Date" className={cssLabel}>Time & Duration</label>
                        <input type="text" id="Date" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="MeetingLink" className={cssLabel}>Meeting Link</label>
                        <input type="text" id="MeetingLink" className={cssInput} required />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="VideoLink" className={cssLabel}>FB group Link</label>
                        <input type="text" id="VideoLink" className={cssInput} required />
                    </div>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Save</button>
                    <div className="mb-5">&nbsp;</div>
                </form>

            </div>
        </div>
    )
}

export default AddCourse