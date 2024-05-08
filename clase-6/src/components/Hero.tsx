'use client'

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@nextui-org/react";
import { Titan_One } from "next/font/google";

interface Square {
  id: number;
  src: string;
}

const titan = Titan_One({ weight: "400", subsets: ["latin"] });

export const Hero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto min-h-[90vh]">
      <div>
        <span className="block mb-4 text-sm text-orange-400">
          Recomenda tu favorita
        </span>
        <h3 className={`${titan.className} text-4xl md:text-6xl text-white`}>
          Sandwicherias Tucumán
        </h3>
        <p className="text-base md:text-lg text-slate-400 my-4 md:my-6">
          Un lugar en donde podrás encontrar los mejores sitios para comer el mejor sandwich de milanesa de Tucumán.
        </p>
        <Button color="secondary">
          Seguir leyendo
        </Button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array: Square[]): Square[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData: Square[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1547347298-4074fc3086f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1510925758641-869d353cecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1629901925121-8a141c2a42f4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1580238053495-b9720401fd45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1569074187119-c87815b476da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1325&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
  }
];

const generateSquares = (data: Square[]): JSX.Element[] => {
  return data.map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};


const ShuffleGrid = (): JSX.Element => {
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [shuffledSquareData, setShuffledSquareData] = useState<Square[]>(shuffle(squareData));
  const [squares, setSquares] = useState<JSX.Element[]>(generateSquares(shuffledSquareData));

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares(shuffledSquareData));

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-3 grid-rows-2 h-[450px] gap-1">
      {squares}
    </div>
  );
};