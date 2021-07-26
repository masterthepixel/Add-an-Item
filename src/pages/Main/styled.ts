import styled from "styled-components";
import { Button } from "../../components/Styled/Button";
import { Input } from "../../components/Styled/Input";
import { Text } from "../../components/Styled/Text";

export const Container = styled.div`
  width: 90%;
  max-width: 800px;
  margin: 30px auto;
`;

export const Title = styled(Text)`
  color: white;
  font-family: "Merriweather-Italic";
  font-size: 40px;
  text-align: left;
  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const Subtitle = styled(Text)`
  color: var(--main-green);
  margin-bottom: 50px;
  width: 60%;
  line-height: 20px;
  font-size: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const InputSection = styled.div`
  grid-template-areas:
    "input select"
    "error error"
    "button button"
    "search search";
  grid-gap: 10px;
  width: 30%;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 100%;
    display: grid;
  }
`;

export const ItemListSection = styled.div`
  background-color: var(--main-white);
  margin-left: 10px;
  display: grid;
  grid-template-areas: "column-1 column-2";
  grid-template-columns: 1fr 1fr;
  grid-gap: 6px;
  padding: 5px;
  width: 70%;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 10px;
    width: -webkit-fill-available;
  }
`;

export const ItemInput = styled(Input)`
  grid-area: input;
  width: -webkit-fill-available;
`;

export const AddButton = styled(Button)`
  grid-area: button;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 0px;
  }
`;

export const ItemList = styled.div`
  overflow-y: auto;
  height: 40vh;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const ErrorSection = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    height: 30px;
  }
  display: flex;
  justify-content: center;
  grid-area: error;
`;
