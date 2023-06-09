// Import website, context, react, & next components
import Auth from "../Auth";
import { UserContext } from "../../lib/context";
import { useContext, useState } from "react";
import Link from "next/link";

export default function Navigation() {
  // Define sidebar & user states
  const [isOpen, setIsOpen] = useState(false);
  const { username } = useContext(UserContext);
  // Switch sidebar display state
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      {/* Navbar */}
      <nav className="pl-2 fixed z-10 top-0 h-16 w-full bg-blue-900 flex items-center text-white">
        <button
          className="lg:hidden px-2 w-8 h-8 text-blue-900 text-opacity-50 bg-white rounded hover:text-gray-700 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <svg
            className="w-full h-full"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div className="text-xl ml-2">The Ocean Scout</div>
      </nav>

      {/* Sidebar */}
      <nav
        className={`${isOpen ? "block" : "hidden"
          } lg:block lg:h-full lg:w-60 fixed z-10 top-0 bottom-0 left-0 bg-gray-100 overflow-x-hidden p-2 pt-0 mt-16 border-r-2 border-r-solid`}
      >
        <Auth />
        <Link href={`/profiles/${username}`} legacyBehavior>
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div>Profile</div>
          </button>
        </Link>
        <hr className="border-solid border-blue-900 border-opacity-50 border-2 mb-2 mt-2" />
        <Link href={"/"} legacyBehavior>
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div>Home</div>
          </button>
        </Link>
        <Link href={"/event"} legacyBehavior>
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
              />
            </svg>
            <div>Event</div>
          </button>
        </Link>
        <Link href={"/team"} legacyBehavior>
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>
            <div>Team</div>
          </button>
        </Link>
        <hr className="border-solid border-blue-900 border-opacity-50 border-2 mb-2 mt-2" />
        <a target="_blank" href="https://github.com/SKY3E/The-Ocean-Scout">
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <div>Open Source</div>
          </button>
        </a>
        <Link href={"/legal"} legacyBehavior>
          <button className="bg-white bg-opacity-50 hover:bg-blue-900 hover:bg-opacity-30 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
            <svg
              className="h-6 w-6 mr-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
              />
            </svg>
            <div>Legal</div>
          </button>
        </Link>
        <hr className="border-solid border-blue-900 border-opacity-50 border-2 mb-2 mt-2" />
        <label className="bg-white bg-opacity-50 rounded h-10 w-56 text-black flex items-center pl-2 mt-2 border-2 border-gray-300">
          <svg className="h-6 w-6 mr-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
          </svg>
          <p>Created by <a className="underline" target="_blank" href="https://github.com/SKY3E">SKYZE</a></p>
        </label>
      </nav>
    </section>
  );
}
