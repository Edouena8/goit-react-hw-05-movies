import { Link } from "react-router-dom";
import styled from "styled-components";

export const AdditionalTilte = styled.p`
    margin-bottom: 20px;
    text-align: center;
    color:  #FFFFFF;
`;

export const AddInfoLink = styled(Link)`
    display: block;
    width: 100px;
    padding: 8px 16px;
    text-align: center;
    border-radius: 4px;
    text-decoration: none;
    color: white;
    background-color: #331016;
    font-weight: 500;
    cursor: pointer;

    &:hover {
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    }
`;

export const AddInfoList = styled.ul`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.3);
  margin-bottom: 40px;
`;