'use client'

import { useEffect, useState } from "react";

interface Recommendation {
    title: string;
    id: string;
    message: string;
  }
  
  interface RecommendationResponse {
    message: string;
    recommendations: Recommendation[];
  }

export default function BlogPage() {
    const [recommendation, setRecommendation] =useState<RecommendationResponse | null>(null);
 
  useEffect(() => {
    const fetchRecommendation = async () => {
      try {
        const response = await fetch(`/api/blog`, {
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

  console.log(recommendation)

  return (
    <div className="container mx-auto px-4 min-h-[90vh]">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Recommendations</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
        
                !recommendation ? <p>Not found recommendations</p>  : (
                    recommendation.recommendations.map((item, index) => (
                        <div key={index}>
                            <h2>{item.title}</h2>
                            <p>{item.message}</p>
                        </div>
                    ))
                )
            
        }
      </div>
    </div>
  );
}