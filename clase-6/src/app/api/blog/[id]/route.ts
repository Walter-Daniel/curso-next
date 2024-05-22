
import { db } from '@/lib/firebase-config';
import { addDoc, collection, doc, getDocs, query, setDoc, Timestamp, where } from 'firebase/firestore';
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request, { params }: { params: { id: string }}) { 
    
    try {
        const recommendationsCollection = collection(db, 'recommendations');
        const recommendationsQuery = query(recommendationsCollection, where('userID', '==', params.id));
        const recommendationsSnapshot = await getDocs(recommendationsQuery);
        const recommendationsData = recommendationsSnapshot.docs.map((doc) => ({
        id: doc.id,
            ...doc.data(),
        }));

        return NextResponse.json({ message: 'Get recommendations successfully', recommendationsData });

    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: 'Error getting recommendations' }, { status: 500 })

    }
    
}


export async function POST(request: Request, { params }: { params: { id: string }}) {
  const body = await request.json(); 
  const data= {
        title: body.title, 
        message: body.description,
        image: body.image,
        userID: params.id,
        createdAt: Timestamp.now()
    };
    try {
        // await setDoc(doc(collection(db, `blog/posts/${params.id}`)), {
        //     data
        // });

        const recommendationsCollection = collection(db, 'recommendations');
        await addDoc(recommendationsCollection, data);
        return NextResponse.json({ message: 'Post submitted successfully' });
    } catch (error) {
        return NextResponse.json({ message: 'Error submitting post' }, { status: 500 })
    }
}
