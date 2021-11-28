import React from "react";
import { useNavigate } from "react-router-dom";
import Slide from "../styles/Slides";
export default function Slides({ data, ...props }) {
  let navigate = useNavigate();
  // use
  return (
    <div>
      {data.map((item, index) => {
        return (
          <Slide
            width
            index={index}
            key={item.id}
            onClick={() => navigate({ pathname: `/${index}`, replace: true })}
          >
            <h1>{item.title.toUpperCase()}</h1>
          </Slide>
        );
      })}
    </div>
  );
}
