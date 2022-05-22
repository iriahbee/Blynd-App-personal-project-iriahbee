import React from "react";
import styled, { css } from "styled-components";

const Button = styled.button`
  width: ${(props) => (props.full ? "100%" : null)};
  border: 0;
  outline: 0;
  padding: 10px 2em;
  color: #000000;
  ${(props) =>
    props.fontSize
      ? css`
          font-size: props.fontSize;
        `
      : ""}
  font-weight: 600;
  border-radius: 20px;
  background-color: #c20301;
  background-image: linear-gradient(to right, transparent 0%, #dd3e46 100%);
  transition: all 240ms ease-in-out;
  box-shadow: 2px 2px #141414;
  cursor: pointer;
  &:hover {
    background-color: #c20301;
  }
`;

function ThemeButton ({children, ...props}) {
return (
<Button {...props}>
 {children}   
</Button>
);

}

export default ThemeButton;
