import styled from "styled-components";

interface SelectWrapperProps {
  gridArea: string;
}

export const SelectWrapper = styled.div`
  border: 3px solid white;
  background-color: var(--dark-gray);
  grid-area: ${(props: SelectWrapperProps) => props.gridArea};
`;

export const SelectInput = styled.select`
  background-color: transparent;
  padding: 15px 0px;
  margin: 0 5px;
  color: lightgray;
  border: none;
  width: -webkit-fill-available;
  &:focus {
    outline: none;
  }
  @media (max-width: 768px) {
    margin-top: 0px;
  }
`;
