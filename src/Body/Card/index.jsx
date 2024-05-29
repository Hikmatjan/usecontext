import React from "react";
import Footer from "../Footer";

const Card = ({
  title,
  year,
  genre,
  rating,
  description,
  img,
  onDelete,
  id,
}) => {
  return (
    <div className="w-[300px] h-[500px] border-2">
      <img src={img} alt="alt" />
      <div className="flex justify-between pl-[10px] pr-[10px]">
        <h3>{title}</h3>
        <h3>{year}</h3>
      </div>
      <div className="flex justify-between pl-[10px] pr-[10px]">
        <h3>{genre}</h3>
        <h3>{rating}</h3>
        <h3>{id}</h3>
      </div>
      <p className="pl-[10px] pr-[10px]">{description}</p>
      <Footer onDelete={onDelete} id={id} />
    </div>
  );
};

export default Card;
