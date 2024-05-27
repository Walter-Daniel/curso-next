"use client";

import Image from "next/image";
import { Title } from "./Title";
import profileIMG from "../../public/profile.jpg";
import { User } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/lib/firebase-config";

interface Recommendation {
  title: string;
  id: string;
}

interface RecommendationResponse {
  message: string;
  recommendationsData: Recommendation[];
}

export const Posts = ({recommendations}: {recommendations: Recommendation[]}) => {
  

  return (
    <>
      <Title size="2xl">Publicaciones:</Title>

      {recommendations.map((data, index) => (
        <div
          className="flex flex-col p-4 bg-gray-800 border-gray-800 shadow-md hover:shodow-lg rounded-2xl cursor-pointer transition ease-in duration-400  transform hover:scale-105"
          key={index}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center mr-auto">
              <div className="inline-flex w-12 h-12">
                <Image
                  src={profileIMG}
                  alt="Profile image"
                  height={200}
                  width={200}
                  priority
                />
              </div>
              <div className="flex flex-col ml-3">
                <div className="font-medium leading-none text-gray-100">
                  {data.title}
                </div>
                <p className="text-sm text-gray-500 leading-none mt-1">
                  Recommendation ID:{data.id}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
