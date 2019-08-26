import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  background-color: #18cd61;
  z-index: 10;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.4);
  padding-left: 20px;
`;

const Title = styled.div`
  width: 100px;
  font-size: 30px;
  font-family: "Anton", sans-serif;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid ${props => (props.current ? "white" : "transprent")};
  transition: border-bottom 0.5s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(({ location: { pathname } }) => (
  <Header>
    <Title>CATDOG</Title>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">DOG</SLink>
      </Item>
      <Item current={pathname === "/cat"}>
        <SLink to="/cat">CAT</SLink>
      </Item>
      <Item current={pathname === "/favorite"}>
        <SLink to="/favorite">최애</SLink>
      </Item>
    </List>
  </Header>
));
