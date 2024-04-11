import Image from "next/image";

const images = [
    { src: '/image1.jpg', alt: 'Image 1' },
    { src: '/image2.jpg', alt: 'Image 2' },
    { src: '/image3.jpg', alt: 'Image 3' },
    { src: '/image4.jpg', alt: 'Image 4' },
    { src: '/image5.jpeg', alt: 'Image 5' },
    { src: '/image6.jpg', alt: 'Image 6' },
];


export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">Galería de Imágenes</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-80">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}