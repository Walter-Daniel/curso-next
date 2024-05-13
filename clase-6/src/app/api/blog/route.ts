import { db } from "@/lib/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request: Request) { 

 
    try {
        const recommendationsCollection = collection(db, 'recommendations');
        const recommendationsSnapshot = await getDocs(recommendationsCollection);
        const recommendations = recommendationsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return NextResponse.json({ message: 'Get recommendations successfully', recommendations });

    } catch (error) {
        return NextResponse.json({ message: 'Error getting recommendations' }, { status: 500 })

        
    }
}