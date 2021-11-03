import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyle";
const Rate = () => {
  return (
    <Rating>
      <FaStar color={"rgb(192,192,192)"} />
      <FaStar color={"rgb(192,192,192)"} />
      <FaStar color={"rgb(192,192,192)"} />
      <FaStar color={"rgb(192,192,192)"} />
      <FaStar color={"rgb(192,192,192)"} />
    </Rating>
  );
};

export default Rate;
