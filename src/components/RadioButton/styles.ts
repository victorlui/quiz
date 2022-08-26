import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  height: 48px;
  position: relative;
`;

export const RadioButtonLabel = styled.label`
  position: absolute;
  top: 25%;
  left: 4px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  border: 1px solid #ccc;
`;
export const RadioButton = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  z-index: 1;
  cursor: pointer;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  &:hover ~ ${RadioButtonLabel} {
    background: #ccc;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
  &:checked + ${Item} {
    background: #3dbbc7;
    border: 2px solid #3dbbc7;
  }
  &:checked + ${RadioButtonLabel} {
    background: #3dbbc7;
    border: 1px solid #3dbbc7;
    &::after {
      display: block;
      color: white;
      width: 12px;
      height: 12px;
      margin: 4px;
    }
  }
`;
