import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Card from "../../Components/Card";

const Container = styled.div`
  padding: 50px;
`;

const CatPresenter = ({ catImage, loading, error }) => (
  <Container>
    {loading ? (
      <Loader />
    ) : (
      <Section title="">
        {catImage.map(cat => (
          <Card imageUrl={cat.url} id={cat.id} key={cat.id} />
        ))}
      </Section>
    )}
  </Container>
);

CatPresenter.propTypes = {
  catImage: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default CatPresenter;
