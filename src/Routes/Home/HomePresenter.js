import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom";
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

const Content = styled.div`
  span {
    font-size: 80px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  text-transform: uppercase;
  font-family: "Pacifico", cursive;
`;

const Dog = styled(FaDog)`
  :hover {
  }
`;
const Cat = styled(FaCat)`
  transform: scaleX(-1);
`;
const SLink = styled(Link)``;

const HomePresenter = ({ loading, error }) => (
  <Container>
    <Box>
      <Content>
        <SLink to="/dog">
          <Dog></Dog>
        </SLink>
        <span>dog</span>
      </Content>
      <Content>
        <SLink to="/cat">
          <Cat></Cat>
        </SLink>
        <span>cat</span>
      </Content>
    </Box>
  </Container>
);

HomePresenter.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default HomePresenter;
