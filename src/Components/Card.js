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
    animation-name: ${props => (props.isFavorite ? "none" : "pulse")};
    animation-duration: 1s;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }
  position: relative;
`;

const Get = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
  cursor: pointer;
`;

const Text = styled.span`
  color: white;
  font-family: "Anton", sans-serif;
  font-size: 40px;
  text-transform: uppercase;
  border: 3px solid white;
  padding: 2px 5px;
  border-radius: 5px;
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

const array = [];

const Card = ({ imageUrl, id }) => {
  const isFavorite = window.location.href.includes("favorite");
  return (
    <Container isFavorite={isFavorite} id={id}>
      <Image bgUrl={imageUrl ? imageUrl : null} />
      {isFavorite ? null : (
        <Get
          onClick={event => {
            if (array.includes(imageUrl)) {
              console.log("already exist");
            } else {
              array.push(imageUrl);
              localStorage.setItem("favorite", JSON.stringify(array));
            }
          }}
        >
          <Text>get</Text>
        </Get>
      )}
    </Container>
  );
};

Card.propTypes = {
  imageUrl: PropTypes.string,
  id: PropTypes.string
};

export default Card;
