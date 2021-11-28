import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

import { Carousel } from "@trendyol-js/react-carousel";

import Slide from '../styles/Slides'

const Wrapper = styled.div`
background: #131313;
padding-right: 50px;

}
`;

export default function Slides({ data, ...props }) {
  let navigate = useNavigate();

  return (
    <Wrapper>
      <Carousel
        leftArrow={
          <BsFillArrowLeftCircleFill
            color="white"
            fontSize={50}
            style={{ marginTop: "176px" }}
          />
        }
        rightArrow={
          <BsFillArrowRightCircleFill
            color="white"
            fontSize={50}
            style={{ marginTop: "176px" }}
          />
        }
        show={3.5}
        slide={4}
        transition={0.5}
      >
        {data.map((item, index) => {
          return <Slide index={index} 
          onClick={() => navigate({ pathname: `/${index}`, replace: true })}
          
          />;
        })}
      </Carousel>
    </Wrapper>
  );
}
