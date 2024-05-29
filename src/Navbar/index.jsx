import { useContext } from "react";
import { MoviesContext } from "../context/movieContext";

const Navbar = () => {
  const [movies] = useContext(MoviesContext);
  return (
    <div className="flex justify-between items-center text-white bg-[#46A358] h-[80px] pl-[30px] pr-[30px]">
      <h3>Uzbek name</h3>
      <h3>Kino sonni:{movies.length}</h3>
    </div>
  );
};

export default Navbar;
