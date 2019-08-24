import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;

  /* PULSE */
  @keyframes pulse {
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }

  &:hover {
    animation-name: pulse;
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }
`;

const Image = styled.div`
  width: 300px;
  height: 300px;
  background-size: cover;
  border-radius: 4px;
  background-position: center center;
  background-image: url(${props => props.bgUrl});
  transition: opacity 0.1s linear;
`;

const Card = ({ imageUrl, id }) => (
  <Container id={id}>
    <Image
      bgUrl={imageUrl ? imageUrl : null}
      onClick={event => console.log(imageUrl)}
    />
  </Container>
);

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string
};

export default Card;
