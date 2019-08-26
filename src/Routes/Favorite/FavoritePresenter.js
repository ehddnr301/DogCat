import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Card from "../../Components/Card";

const Container = styled.div`
  padding: 50px;
`;

const FavoritePresenter = ({ FavoriteImage, loading, error }) => (
  <>
    {loading ? (
      <Loader></Loader>
    ) : (
      <Container>
        <Section title="Favorite Image">
          {FavoriteImage.map((image, index) => (
            <Card id={index} key={index} imageUrl={image} />
          ))}
        </Section>
      </Container>
    )}
  </>
);

export default FavoritePresenter;
