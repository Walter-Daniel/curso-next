import { Card } from "@/components/Card";
import axios from "axios";



export interface UsersResponse {
    id:       number;
    name:     string;
    username: string;
    email:    string;
    address:  Address;
    phone:    string;
    website:  string;
    company:  Company;
}

export interface Address {
    street:  string;
    suite:   string;
    city:    string;
    zipcode: string;
    geo:     Geo;
}

export interface Geo {
    lat: string;
    lng: string;
}

export interface Company {
    name:        string;
    catchPhrase: string;
    bs:          string;
}


export default async function RecommendationPage() {
    const getData = await axios.get<UsersResponse[]>('https://jsonplaceholder.typicode.com/users');
    if(getData.status !== 200) throw new Error('Error fetching JSON API')
    const { data } = getData;
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-4xl text-center py-8 font-bold">Lista de usuarios</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {
            data.map(user => (
               <Card key={user.id} id={user.id} name={user.name} username={user.username} email={user.email} />
            ))
        }
      </div>
    </div>
  );
}