import axios from "axios";
import Link from "next/link";

interface ParamsProps {
    recommendationSlugs: string;
}

interface Params {
    params: ParamsProps;
}


export interface PostUserResponse {
    userId: number;
    id:     number;
    title:  string;
    body:   string;
}


export default async function RecommendationsPage({params}:Params) {

    const getData = await axios.get<PostUserResponse[]>(`https://jsonplaceholder.typicode.com/users/${params.recommendationSlugs}/posts`)
     
    if(getData.status !== 200) throw new Error('Error fetching JSON API')
    const { data } = getData

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl text-center font-bold py-8">Recomendaciones</h2>
      <Link href={"/recommendations"} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Regresar a recomendaciones de usuarios</Link>
      <ul>
        {
          data.map(post => (
            <li key={post.id} className="border p-4 m-4">
              <h2 className="text-2xl">{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))
        }
      </ul>
    </div>
  );
}