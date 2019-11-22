import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import { Link, withRouter } from "react-router-dom";
import { FaDog, FaCat } from "react-icons/fa";

const Container = styled.div`
  padding: 50px;
`;
const Box = styled.div`
  width: 100%;
  height: 100%;
  font-size: 400px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Dog = styled(FaDog)``;
const Cat = styled(FaCat)`
  transform: scaleX(-1);
`;
const SLink = styled(Link)``;

const HomePresenter = ({ loading, error }) => (
  <Container>
    <Box>
      <SLink to="/dog">
        <Dog></Dog>
      </SLink>
      <SLink to="/cat">
        <Cat></Cat>
      </SLink>
    </Box>
  </Container>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
