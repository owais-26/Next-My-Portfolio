import styled from "styled-components";

const StyledHomeLogo = styled.a`
  position: relative;
  display: inline-block;
  color: inherit;
  font-size: 2.5rem;
  padding-left: 1rem;
  animation: tilt 2s ease-in-out infinite alternate;
  @keyframes tilt {
  from {
    transform: rotateZ(-10deg);
  }
  to {
    transform: rotateZ(10deg);
  }
}
`;

export default StyledHomeLogo;
