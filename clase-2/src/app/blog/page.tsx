'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const CommentsSection: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Comment[]>('https://jsonplaceholder.typicode.com/posts/1/comments');
        setComments(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Comentarios</h2>
      <ul>
        {comments.map(comment => (
          <li key={comment.id} className="mb-4">
            <h3 className="text-lg font-medium">{comment.name}</h3>
            <p className="text-gray-600">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const BlogPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40">
      <h1 className="text-4xl font-bold mt-8 mb-4">Buenos Aires</h1>
      <p className="text-lg text-gray-700 mb-8">
        De los pocos barrios que nacieron durante la época colonial, solo dos conservan vestigios de aquellos tiempos: San Telmo y Montserrat. Ambos barrios supieron ser los escogidos por las familias más pudientes del siglo XVIII y XIX, hasta que en 1871 una epidemia de fiebre amarilla diezmó la población obligándolos a trasladarse a los barrios de Retiro y Recoleta ubicados en el norte. Sin embargo, la gran cantidad de inmigrantes italianos que ingresó al país decidió instalarse allí, ocupando casas abandonadas por la aristocracia o construyendo casas con claro estilo italianizante y una vez más la vecindad volvió a la vida.
        <br /><br />
        Si bien estos barrios poseen una estética y dinámica agradables para visitar en cualquier día, recomendamos se haga el domingo. En dicho día, se monta una feria a lo largo de toda la calle Defensa que incluye un sector de antigüedades sobre la Plaza Dorrego, de artesanías y de objetos varios desde la Avenida Independencia hasta Plaza de Mayo.
        <br /><br />
        Tanto en San Telmo como Montserrat se ha logrado unir el pasado colonial, la inmigración del siglo XX y el arte moderno del siglo XXI. Tal sincretismo histórico se puede observar en los dos museos de arte que se encuentran en la Avenida San Juan y calle Defensa. El primero de ellos es el MAMBA (Museo de Arte Moderno de Buenos Aires), un museo estatal que se encuentra en lo que fue una vieja fábrica y en donde se exhibe la principal colección de arte modernista de argentinos y extranjeros. El segundo de los museos es el Mac (Museo de Arte Contemporáneo), que es una galería privada creada con el fin de promover el arte contemporáneo, tal como indica su nombre.
        <br /><br />
        Siguiendo por la calle Defensa (altura 1100), se podrá apreciar un claro ejemplo del proceso histórico que aconteció en San Telmo. Allí se halla la Casa de los Ezeiza una casona construida por la familia en 1876, siguiendo el ordenamiento arquitectónico impuesto desde mediados del siglo XIX y posee tres patios: el primero rodeado por las habitaciones sociales (comedor, biblioteca, sala de estar), el segundo circundado por las habitaciones personales y el tercero correspondiente al área de servicio. Dicha casa fue habitada durante 30 años, hasta que los Ezeiza decidieron mudarse a un lugar más grande en Recoleta. En la década de 1930 la casona es abandonada y utilizada como conventillo, es decir, que diversas familias vivían allí, cada una con una habitación asignada con uso compartido de baños y cocinas. Esta modalidad de vida perduró en gran parte de Buenos Aires durante el principio del siglo XX, ganó gran popularidad entre los inmigrantes, alojando entre 10 y 30 familias. Actualmente funciona una galería comercial de antigüedades y una feria americana.
      </p>
      <CommentsSection />
    </div>
  );
};

export default BlogPage;
