import React from "react";
import ethereum from "./images/chains/ethereum";
import styled from "styled-components";
import resetCSS from "../../styles/reset";

const getLogo = (logo, width, height) => {
  switch (logo) {
    case "ethereum":
      return ethereum(width, height);
    default:
      return ethereum();
  }
};

const StyledIllustration = styled.div`
  ${resetCSS}
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const Illustration = ({
  id = String(Date.now()),
  logo,
  width,
  height,
}) => {
  return (
    <StyledIllustration width={width} height={height} id={id}>
      {getLogo(logo, width, height)}
    </StyledIllustration>
  );
};

export default Illustration;
