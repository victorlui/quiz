import styled from "styled-components";

export const Container = styled.div`
  background-color: #272C48;
  border-radius: 5px;
  padding: 20px;
  width: 50rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;

  h1 {
    text-align: center;
    line-height: 2.5rem;
    color: #fff;
  }

  p {
    font-size: 1.3rem;
    text-align: center;
    line-height: 2rem;
    color: #fff;
  }

  button {
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    border: 0;
    border-radius: 10px;
    padding: 15px;
    width: 150px;
    color: #fff;
    cursor: pointer;

    :hover {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
`;
