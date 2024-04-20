import Image from 'next/image';
import Link from 'next/link';


export const metadata = {
 title: 'Inicio',
 description: 'Inicio',
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-24 px-8 text-center h-[87vh]">
        <div className="absolute inset-0">
          <Image
            src="/argentina.jpg"
            alt="Argentina"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Argentina!</h1>
          <p className="text-lg">Descubre la belleza y la emoción de este hermoso país.</p>
        </div>
      </div>


      {/* Sección de Disfruta de experiencias únicas */}
        <div className="pt-12 px-8">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <Image 
              src='/image6.jpg'
              alt='Argentina'
              width={500}
              height={300}
            />
            {/* Descripción */}
            <div className="w-1/2 ml-8">
              <h2 className="text-3xl font-bold mb-4">Disfruta de experiencias únicas</h2>
              <p className="text-lg mb-4">"Cómo vivir sin verte si se que pertenezco a esa región en donde la emoción le gana siempre a la razón, porque Argentina tiene locas golondrinas en el corazón, en donde la esperanza, siempre inventa algún color, y la gente no se cansa de soñar y dar amor." - Eladia Blázquez</p>
            </div>
          </div>
        </div>
      {/* Sección del blog */}
      <div className="pt-12 px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image 
            src='/blog.jpg'
            alt='Buenos Aires'
            width={500}
            height={300}
          />
          {/* Descripción */}
          <div className="w-1/2 ml-8">
            <h2 className="text-3xl font-bold mb-4">Buenos Aires - Blog</h2>
            <p className="text-lg mb-4">Cuna de importantes tradiciones como el tango o el dulce de leche, su perfil urbano cuenta con una diversidad de estilos asombrosa: colonial español, neogótico, art decó, art nouveau, italianizante y francés, razón por la cual recibe el apodo de la “París de Sudamérica”</p>
            <Link href="/blog" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Ver más
            </Link>
          </div>
        </div>
      </div>
      
      {/* Sección de Recomendaciones */}
      <div className="py-24 px-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Image 
            src='/image6.jpg'
            alt='Argentina'
            width={500}
            height={300}
          />
          {/* Descripción */}
          <div className="w-1/2 ml-8">
            <h2 className="text-3xl font-bold mb-4">Disfruta de experiencias únicas</h2>
            <p className="text-lg mb-4">"Cómo vivir sin verte si se que pertenezco a esa región en donde la emoción le gana siempre a la razón, porque Argentina tiene locas golondrinas en el corazón, en donde la esperanza, siempre inventa algún color, y la gente no se cansa de soñar y dar amor." - Eladia Blázquez</p>
            <Link href='/recommendations' className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">Recomendaciones</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
