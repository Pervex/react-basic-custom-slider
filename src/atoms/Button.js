import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    position: absolute;
    top: 370px;
    background: none;
    color: white;
    display: list-item;
    font-size: xxx-large;
    border: none;
    cursor: pointer;
`

export default props =>(<Button style={{...props.style}} onClick={props.onClick}>{props.content}</Button>)

