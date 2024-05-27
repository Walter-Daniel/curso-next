'use client'

import { FormBlog, Posts, ProfileCard, Stats, Title } from "@/components";
import { auth, db } from "@/lib/firebase-config";
import { onAuthStateChanged, User } from "firebase/auth";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


interface Recommendation {
  title: string;
  id: string;
}

interface RecommendationResponse {
  message: string;
  recommendationsData: Recommendation[];
}



export default function Profile() {

  const [user, setUser] = useState<User | null>(null);
  const [recommendations, setRecommendations] = useState<Recommendation[] | []>([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    
    const unsubscribeRef = onSnapshot(collection(db, 'recommendations'), (querySnapshot) => {
      const recomendations:Recommendation[] = querySnapshot.docs.map((doc) => doc.data() as Recommendation);
      setRecommendations(recomendations);
      console.log("recomendations ", recomendations);
    });
    () => unsubscribeRef();

    return () => unsubscribe();
        
  }, []);

  return (
    <div>
      {/* <!-- component --> */}
      {
        user ? (
          <div className="flex flex-col items-center justify-center min-h-screen">
        {/* <!-- dark theme --> */}
        <div className="container  m-4">
          <div className="max-w-7xl w-full mx-auto grid gap-4 grid-cols-1">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* <!-- profile card --> */}
              <ProfileCard user={user} />
            {/* <!---stats--> */}
              <Stats />
           </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-12">
              {/* <!--BLOG FORM--> */}
              <div className="flex flex-colrelative items-center justify-center col-span-8">
                <FormBlog user={user}/>
              </div>
              {/* <!--elements--> */}
              <div className="flex flex-col space-y-4 row-span-2 col-span-4 text-white">
                {/* <!-- elements 1 --> */}
               <Posts recommendations={recommendations}/>
              </div>
            </div>
          </div>
        </div>
      </div>
        ) : <p>Error</p>
      }
    </div>
  );
}
