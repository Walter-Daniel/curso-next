"use client";

import Image from "next/image";
import { Title } from "./Title";
import profileIMG from "../../public/profile.jpg";
import { User } from "firebase/auth";
import { useEffect, useState } from "react";

interface Recomendation {
  title: string;
  id: string;
}

interface RecommendationResponse {
  message: string;
  recommendationsData: Recomendation[];
}

export const Posts = ({ user }: { user: User }) => {
  const [recommendation, setRecommendation] =
    useState<RecommendationResponse | null>(null);

  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch(`/api/blog/${user!.uid}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.log(`API request failed with status ${response.status}`);
        }

        const data = await response.json();
        setRecommendation(data);
      } catch (error) {
        console.error("Error fetching recommendation:", error);
      }
    };

    fetchRecommendation();
  }, []);

  console.log(recommendation?.recommendationsData);

  return (
    <>
      <Title size="2xl">Publicaciones:</Title>

      {recommendation?.recommendationsData.map((data, index) => (
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
