'use client'
import { useEffect, useState } from "react";

export interface Todo {
    userId:    number;
    id:        number;
    title:     string;
    completed: boolean;
}

export default function ClientPage() {
    const [data, setData] = useState<Todo[]>([]);
    const [fetchRequested, setFetchRequested] = useState<boolean>(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users/1/todos"
          );
          if (!response.ok) {
            throw new Error("Problema al obtener datos");
          }
          const todos: Todo[] = await response.json();
          setData(todos);
        } catch (error) {
          console.log("Error al obtener datos", error);
        }
      };
  
      if (fetchRequested) {
        fetchData(); 
      }
    }, [fetchRequested]);
  
    const handleFormSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      setFetchRequested(true);
    };
  
    return (
      <div className="p-14">
        <h1 className="text-4xl pb-3">Client Side</h1>
        <form onSubmit={handleFormSubmit}>
          <div>
            <button type="submit" className="bg-cyan-600 p-3 text-white rounded-xl">Click para traer información</button>
          </div>
        </form>
        <ul>
          {data.map((todo) => (
            <li key={todo.id}>
              {todo.title} - {todo.completed ? "Completado" : "Pendiente"}
            </li>
          ))}
        </ul>
      </div>
    );
}