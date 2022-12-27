export default function Sidebar() {
    return (
<div className="flex flex-wrap w-full h-screen">          
    <div className="w-2/12 bg-red-50 rounded p-3 shadow-lg">
            <div>
                <h3 className="font-bold font-serif py-2 px-1">Deparment</h3>
            </div>
        <ul className="space-y-2 text-sm">
            <li>
                <a href="#" className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-red-300 focus:bg-red-300 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                        </svg>
                    </span>
                    <span>All</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-red-300 focus:bg-red-300 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                    </span>
                    <span>Sales</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-red-300 focus:bg-red-300 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </span>
                    <span>Administrator</span>
                </a>
            </li>
            <li>
                <a href="#" className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-red-300 focus:bg-red-300 focus:shadow-outline">
                    <span className="text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                    </span>
                    <span>HR</span>
                </a>
            </li>
            <li>
                <a href="" className="flex items-center space-x-3 text-black p-2 rounded-md font-medium hover:bg-red-300 focus:bg-red-300 focus:shadow-outline">
                    <span className=" text-gray-600">
                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </span>
                    <span>Management</span>
                </a>
            </li>
        </ul>
    </div>
</div>
    );
  }