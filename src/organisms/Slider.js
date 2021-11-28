import React, { useState } from "react";
import items from "./mockData";
import Button from "../atoms/Button";
import Slides from "../atoms/Slides";
import styled from "styled-components";

const Container = styled.div`
    width:1000px;
    background:#20232a;
    margin:0 auto;
    top:150px;
    max-height:350,
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

`;
export default function Slider() {
  const [startSlide, setStartSlide] = useState(1);

  const [data, setData] = useState(items.slice(0, 4));
  const changeSlide = (num) => {
    setStartSlide(
      (activItem) =>
        (activItem && activItem <= items.length && activItem + num) || 1
    );

    const active = startSlide + num || 1;

    if (items.length / startSlide < 2) {
      const initialSlides = items.slice(active, items.length);

      const moreSlides =
        initialSlides.length < 4
          ? items.slice(0, 4 - initialSlides.length)
          : [];
      let newDate = [...initialSlides, ...moreSlides];
      return setData(newDate);
    }

    setData((_) => items.slice(startSlide, startSlide + 4));
  };
  return (
    <Container>
      <Button onClick={() => changeSlide(-1)} content="&#10094;" />
      <Slides data={data} />
      <Button
        style={{ right: "600px" }}
        onClick={() => changeSlide(1)}
        content="&#10095;"
      />
    </Container>
  );
}
