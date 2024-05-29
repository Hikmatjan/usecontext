import { useContext } from "react";

import Card from "./Card";
import { MoviesContext } from "../context/movieContext";

const Body = () => {
  const [movies] = useContext(MoviesContext);

  console.log(movies);
  return (
    <div className="flex flex-col justify-center w-full my-[50px] gap-[30px] items-center mt-6">
      {movies.map((value) => (
        <Card key={value.id} {...value} />
      ))}
    </div>
  );
};

export default Body;
