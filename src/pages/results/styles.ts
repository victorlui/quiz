import styled from "styled-components";

export const CardResult = styled.div`
  background-color: #272c48;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  overflow-y: auto;

  h1 {
    text-align: center;
    color: #fff;
  }

  p {
    color: #fff;
  }

  .resultsBox {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .questionText {
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 500px;
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
