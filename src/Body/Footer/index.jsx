import { Button } from "antd";
import { useContext } from "react";
import { MoviesContext } from "../../context/movieContext";
const Footer = ({ id }) => {
  const [movies, setMovies] = useContext(MoviesContext);
  return (
    <div>
      {" "}
      <div className="flex justify-between mt-4 pl-[20px] pr-[20px] ">
        <Button danger>Edit</Button>
        <Button
          onClick={() => setMovies(movies.filter((value) => value.id !== id))}
          type="primary"
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Footer;
