export interface Comments {
    postId: number;
    id:     number;
    name:   string;
    email:  string;
    body:   string;
}

const fetchData = async ():Promise<Comments[]> => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
      if (!response.ok) {
        throw new Error('Hubo un problema al obtener los datos');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      return [];
    }
  };
  
  export default function ServerPage() {
    const fetchDataAndRender = async () => {
      const data = await fetchData();
      return data.map((item) => <p key={item.id}>{item.name}</p>);
    };
  
    return (
      <div className="p-14">
        <h1 className="text-4xl pb-3">Server Side</h1>
        {fetchDataAndRender()}
      </div>
    );
  }
  