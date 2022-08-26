import styled from "styled-components";

interface BtnLevelProps {
  level: string;
  selected: string;
}

export const BtnLevel = styled.div`
  border: 0;
  background-color: transparent;
  border: 1px solid #fff;
  padding: 15px;
  border-radius: 10px;
  width: 120px;
  color: #fff;
  text-align: center;
  cursor: pointer;

  ${({ level,selected }: BtnLevelProps) =>
    level === selected &&
    `
    color: #3DBBC7;
    border-color: #3DBBC7;

  `}

  ${({ level,selected }: BtnLevelProps) =>
    level === selected &&
    `
    color: #3DBBC7;
    border-color: #3DBBC7;

  `}


${({ level,selected }: BtnLevelProps) =>
    level === selected &&
    `
    color: #3DBBC7;
    border-color: #3DBBC7;

  `}

  :hover {
    color: #3dbbc7;
    border-color: #3dbbc7;
  }
`;
