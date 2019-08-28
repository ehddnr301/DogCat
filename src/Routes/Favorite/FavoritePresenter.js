import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Card from "../../Components/Card";

const Container = styled.div`
  padding: 50px;
`;

const RemoveBtn = styled.button`
  padding: 5px 10px;
  color: white;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
  background-color: #e74c3c;
  border-radius: 5px;
  pointer-events: auto;
  outline: none;
`;

const FavoritePresenter = ({ FavoriteImage, loading, error }) => (
  <>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <RemoveBtn
          onClick={event => {
            localStorage.removeItem("favorite");
            document.location.reload(true);
          }}
        >
          Remove All
        </RemoveBtn>
        <Section title="Favorite Image">
          {FavoriteImage &&
            FavoriteImage.map((image, index) => (
              <Card id={JSON.stringify(index)} key={index} imageUrl={image} />
            ))}
        </Section>
      </Container>
    )}
  </>
);

FavoritePresenter.propTypes = {
  FavoriteImage: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default FavoritePresenter;
