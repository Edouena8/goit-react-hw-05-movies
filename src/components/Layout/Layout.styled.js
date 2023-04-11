import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px; 
  // border-bottom: 1px solid #FFFFFF;  
  
  > ul {
    display: flex;
    padding: 0;
    gap: 40px;
  }
`;

export const Header = styled.header`
  color: #FFFFFF;
  background-color: #000000;
`;

export const Section = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
`;

export const Link = styled(NavLink)`
  display: block;
  // min-width: 100px;
  padding: 8px 16px;
  // text-align: center;
  // border-radius: 4px;
  text-decoration: none;
  color: white;
  font-weight: 500;
  cursor: pointer;

  &.hover {
    color: #74C7ED;
  }

  &.active {
    color: #74C7ED;
    border-bottom: 2px solid #74C7ED; 
  }
`;

export const Main = styled.main`
  min-height: 1000px;
  background: -webkit-linear-gradient(90deg,#000000,#230b10,#331016,#230b10,#000000); 
`;
