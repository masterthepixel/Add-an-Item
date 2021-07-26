import styled from "styled-components";
import { Input } from "../Styled/Input";

export const SearchInputWrapper = styled.div`
  position: relative;
  border: 3px solid white;
`;

export const SearchIcon = styled.i`
  position: absolute;
  right: 0;
  color: white;
  top: 5px;
  right: 10px;
`;

export const SearchInput = styled(Input)`
  padding: 6px 30px 6px 10px;
  border: none;
  width: -webkit-fill-available;
`;
