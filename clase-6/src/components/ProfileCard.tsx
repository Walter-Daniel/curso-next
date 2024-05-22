import Image from "next/image";
import React from "react";
import profileIMG from '../../public/profile.jpg'
import { User } from "firebase/auth";


export const ProfileCard = ({user}:{user: User}) => {
  return (
    <div className="flex flex-col sticky top-0 z-10">
      <div className="bg-slate-200 border border-slate-200 shadow-lg  rounded-2xl p-4">
        <div className="flex-none sm:flex">
          <div className=" relative h-32 w-32   sm:mb-0 mb-3">
            <Image 
              src={profileIMG}
              alt="Profile image"
              height={200}
              width={200}
              priority
            />
            <a
              href="#"
              className="absolute -right-2 bottom-2 -ml-3 p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
              </svg>
            </a>
          </div>
          <div className="flex-auto sm:ml-5 justify-evenly">
            <div className="flex items-center justify-between sm:mt-2">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <div className="w-full flex-none text-lg text-black font-bold leading-none">
                    Welcome
                  </div>
                  <div className="flex-auto text-slate-800 my-1">
                    <span className="mr-3 ">Jhon</span>
                    <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                    <span>Doe</span>
                  </div>
                  <div>
                  <span>{user?.email}</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
