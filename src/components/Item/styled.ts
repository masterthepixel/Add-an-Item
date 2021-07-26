import styled from "styled-components";

interface ItemProps {
  isGray: boolean;
}

export const ItemWrapper = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  padding: 0 15px;
  background-color: ${(props) =>
    props.isGray ? "var(--light-gray)" : "var(--main-white)"};
`;

export const RemoveButton = styled.i<ItemProps>`
  border-radius: 7px;
  border: 2px solid ${(props) => (props.isGray ? "white" : "var(--main-gray)")};
  padding: 4px;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;
  color: ${(props) => (props.isGray ? "white" : "var(--main-gray)")};
`;

export const ItemTitle = styled.p<ItemProps>`
  margin: 0;
  flex: 1;
  padding: 15px 0;
  color: ${(props) => (props.isGray ? "white" : "var(--main-gray)")};
  word-break: break-all;
  padding-right: 20px;
`;
