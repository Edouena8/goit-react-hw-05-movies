import styled from "styled-components";

export const InputContainer = styled.div`
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
`;

export const FormWrap = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #331016;

    border-radius: 3px;
    overflow: hidden;

    &:hover {
        -webkit-box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
        box-shadow: 5px 5px 5px 0px #000000, inset 4px 4px 15px 0px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
      }
`;

export const FormButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  padding: 8px 16px;
  text-align: center;
  border-radius: 4px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  transition: opacity 250ms cubic-bezier(#331016);
  cursor: pointer;
  outline: none;
`;

export const ButtonLabel = styled.span`
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    clip-path: inset(50%);
    border: 0;
`;

export const FormInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 8px 16px;
  background-color: #331016;
  color: #FFF;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;