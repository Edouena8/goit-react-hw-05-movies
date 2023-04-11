import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  padding: 0 15px; 
`;

export const BackLink = styled(Link)`
  display: block;
  width: 100px;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
  margin-bottom: 40px;
  text-decoration: none;
  color: white;
  background-color: #331016;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    -webkit-box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0); 
box-shadow: #FFF 0 -1px 4px, #ff0 0 -2px 10px, #ff8000 0 -10px 20px, red 0 -18px 40px, 5px 5px 15px 5px rgba(0,0,0,0);
  }
`;

export const InfoWrap = styled.div`
    display: flex;
    gap: 30px;
    color: #fff;
    margin-bottom: 50px;
`;

export const InfoBox = styled.div`
    border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
    margin-bottom: 50px;
`

export const MovieTitle = styled.h2`
  margin-bottom: 20px;
  color: #e6e6e6;
`;

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const Info = styled.p`
margin-bottom: 50px;
`;