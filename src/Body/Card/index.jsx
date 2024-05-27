import React from "react";
import { Button } from "antd";

const Card = ({ title, year, genre, rating, description, img, id }) => {
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
      <div className="flex justify-between mt-4 pl-[20px] pr-[20px] ">
        <Button danger>Edit</Button>
        <Button type="primary">Delete</Button>
      </div>
    </div>
  );
};

export default Card;
