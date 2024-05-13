export const Stats = () => {
  return (
    <div className="p-4 relative  bg-gray-800 border border-gray-800 shadow-lg  rounded-2xl">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-14 w-14  absolute bottom-4 right-3 text-green-400"
        viewBox="0 0 20 20"
        fill="currentColor"
        >
        <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
        <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
        </svg>
        <div className="flex justify-between items-center ">
        <img
            className="w-7 filter grayscale"
            src="https://v1.tailwindcss.com/_next/static/media/tailwindcss-mark.6ea76c3b72656960a6ae5ad8b85928d0.svg"
            alt="taiwind css"
        />
        </div>
        <div className="text-2xl text-gray-100 font-medium leading-8 mt-5">
        20
        </div>
        <div className="text-sm text-gray-500">Publicaciones</div>
    </div>
  );
};
