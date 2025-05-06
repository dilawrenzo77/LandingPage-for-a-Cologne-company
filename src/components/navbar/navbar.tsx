export default function navbar() {
    return <div className="navbar">
        <nav className="flex items-center fixed top-0 justify-between mx-auto bg-neutral-900 w-full px-3 lg:px-15 py-2 overflow-hidden">
            <div className="flex items-center justify-between gap-4 w-max px-1">
                <p className="text-neutral-50 lg:text-xl md:text-md sm:text-sm transition duration-700 ease-in-out hover:opacity-20">Catalog</p>
                <p className="text-neutral-50 lg:text-xl md:text-md sm:text-sm transition duration-700 ease-in-out hover:opacity-20">Contacts</p>
                <div className="flex items-center justify-between">
                    <input type="text"  className="w-15 sm:w-20 md:w-25 lg:w-40 bg-neutral-50 rounded-full shadow-sm"/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 text-neutral-50">
                        <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11ZM2 9a7 7 0 1 1 12.452 4.391l3.328 3.329a.75.75 0 1 1-1.06 1.06l-3.329-3.328A7 7 0 0 1 2 9Z" clipRule="evenodd" />
                    </svg>

                </div>
            </div>
            <div className="flex items-center justify-between gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-neutral-50 size-4 md:size-5 lg:size-7 transition duration-700 ease-in-out hover:text-red-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-neutral-50 size-4 md:size-5 lg:size-7 transition duration-700 ease-in-out hover:text-red-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
                <p className="hidden bg-neutral-50 transition duration-700 ease-in-out w-max px-3 rounded-md shadow-lg text-sm sm:block lg:text-lg  hover:bg-neutral-900 hover:text-neutral-50">Sign In</p>
            </div>
        </nav>
    </div>
};
