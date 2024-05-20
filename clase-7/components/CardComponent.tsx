import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { Movies } from "@/app/interfaces/movies";

export const CardComponent = ({movie}:{movie: Movies }) => {
  return (
    <Card className="py-4 m-2">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{movie.original_title_romanised}</p>
        <small className="text-default-500">{movie.release_date}</small>
        <h4 className="font-bold text-large">Direction by: {movie.director}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={movie.original_title_romanised}
          className="object-cover rounded-xl"
          src={movie.image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
