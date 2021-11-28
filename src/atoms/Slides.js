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
        height: 400px;
        display: inline-block;
        margin: 20px;
        padding: 3px;
        border-radius: 24px;
        background-color:${_ => getRandomColor()}
        opacity: ${({ index }) => (index == 3 ? 0.2 : 1)};
        width:  ${({ index }) => (index == 3 ? "140px" : "260px")}; 
        pointer-events:  ${({ index }) => (index == 3 ? "none" : "all")}; 
        h1 {
          text-align:center;
          overflow:hidden
        }

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
            {/* <img src="https://www.google.com/search?q=slider+images&rlz=1C1GCEU_en-gbPK942PK942&sxsrf=AOaemvKLMj0ixrmyPCpVY9HCOk4Hhmm7Sw:1638087202919&tbm=isch&source=iu&ictx=1&fir=JtRcT8cFrkkS1M%252C5b5aNXhnhQ5D4M%252C_%253BLKjvW_pkv-eHcM%252CcQwlMvNr_A1aWM%252C_%253BjbOW35n_CeeKdM%252CcQwlMvNr_A1aWM%252C_%253B5qcAHlkT-k9E5M%252C5b5aNXhnhQ5D4M%252C_%253BUlPDzpmkWXFQSM%252CqwQhKwYdTXzATM%252C_%253BDbQPyb-FDKGwWM%252CdmYa96c32AQSoM%252C_%253BYymUOuPMLaI4fM%252Ckcp504H86YiBbM%252C_%253Bzw52sPJcTnkEmM%252CvWmDZL-PGB-YnM%252C_%253B3m_guVxQqfvKfM%252Ckcp504H86YiBbM%252C_%253BoyYA_1wQDPzyNM%252CfOaMOeJ2U_1AVM%252C_%253BjyGAVpJWqvY21M%252C5b5aNXhnhQ5D4M%252C_%253BME3OHmwzJey2jM%252CpCjMc_hIVlvHSM%252C_&vet=1&usg=AI4_-kQFLSMCuD1gwhio1QVSvHIdClEmZw&sa=X&ved=2ahUKEwiD4tyuzrr0AhVzSPEDHQtUDfcQ9QF6BAgUEAE#imgrc=LKjvW_pkv-eHcM"/> */}
            <h1>{item.title.toUpperCase()}</h1>
          </Slide>
        );
      })}
    </div>
  );
}
