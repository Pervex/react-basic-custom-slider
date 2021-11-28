import getRandomColor from "../utils/RandomColor";
import styled from "styled-components";


export default  styled.div`
height: 400px;
display: inline-block;
margin: 20px;
padding: 3px;
border-radius: 24px;
background-color:${(_) => getRandomColor()}
opacity: ${({ index }) => (index == 3 ? 0.2 : 1)};
// width:  260px; 
width:  ${({ index,width }) => (width && index == 3 ? "140px" : "260px")}; 

pointer-events:  ${({ index }) => (index == 3 ? "none !important" : "visible")};
h1 {
  text-align:center;
  overflow:hidden
}

`;