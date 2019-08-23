import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 100%;
  height: 300px;
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
    <Image bgUrl={imageUrl ? imageUrl : null} />
  </Container>
);

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string
};

export default Card;
