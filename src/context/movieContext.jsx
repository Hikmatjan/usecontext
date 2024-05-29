import { createContext, useState } from "react";

export const MovieConext = createContext(null);

const MovieConextProvider = () => {
  return (
    <div>
      <MovieConext.Provider></MovieConext.Provider>
    </div>
  );
};

export default MovieConextProvider;
