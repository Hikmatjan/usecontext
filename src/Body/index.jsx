import React from "react";
import { movies } from "../utils";
import Card from "./Card";

const Body = () => {
  return (
    <div className="flex flex-col justify-center w-full my-[50px] gap-[30px] items-center mt-6">
      {movies.map((value) => (
        <Card
          key={value.id}
          {...value}
          //   title={value.title}
          //   year={value.year}
          //   genre={value.genre}
          //   rating={value.rating}
          //   description={value.description}
          //   img={value.img}
          //   id={value.id}
        />
      ))}
    </div>
  );
};

export default Body;
