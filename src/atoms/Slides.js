import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const Slide = styled.div`
        height: 300px;
        display: inline-block;
        margin: 20px;
        padding: 3px;
        border-radius: 24px;
        background-color:${(_) => getRandomColor()}
        opacity: ${({ index }) => (index == 3 ? 0.1 : 1)};
        width:  ${({ index }) => (index == 3 ? "115px" : "200px")}; 
        pointer-events:  ${({ index }) => (index == 3 ? "none" : "all")}; 
        box-shadow: 5px 5px 15px 5px #000000;

`;
export default function Slides({ data, ...props }) {
  let navigate = useNavigate();
  // use
  return (
    <div>
      {data.slice().map((item, index) => {
        return (
          <Slide
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
