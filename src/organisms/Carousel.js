import React from "react";
import items from "./mockData";

import Carousel from "../atoms/Carousel.js";

export default function Slider() {
  return <Carousel data={items} />;
}
