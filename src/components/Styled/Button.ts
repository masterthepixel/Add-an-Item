import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: lightgray;
  border: 3px solid white;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: var(--dark-gray);
  }
  width: -webkit-fill-available;
`;
