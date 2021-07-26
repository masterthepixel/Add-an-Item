import styled from "styled-components";

interface CustomTextProps {
  size?: number;
  lh?: number;
}

export const Text = styled.p<CustomTextProps>`
  color: ${(props) => props.color || "var(--main-white)"};
  font-size: ${(props) => (props.size ? `${props.size}px` : "20px")};
  line-height: ${(props) => (props.lh ? `${props.lh}px` : "40px")};
  margin: 0px;
`;
