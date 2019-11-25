import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Card from "../../Components/Card";

const Container = styled.div`
  padding: 50px;
`;

const DogPresenter = ({ dogImage, error, loading }) => (
  <>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        <Section title="">
          {dogImage.map(dog => (
            <Card imageUrl={dog.url} id={dog.id} key={dog.id} />
          ))}
        </Section>
      </Container>
    )}
  </>
);
DogPresenter.propTypes = {
  dogImage: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DogPresenter;
