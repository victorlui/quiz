import styled from "styled-components";

export const CardQuiz = styled.div`
  background-color: #272c48;
  border-radius: 5px;
  padding: 20px;
  width: 50rem;

  span {
    color: #fff;
    font-weight: normal;
  }

  hr {
    border: 0.5px solid rgba(255, 255, 255, 0.15);
  }

  h1 {
    line-height: 2.5rem;
    color: #fff;
  }

  p {
    font-size: 1.3rem;
    line-height: 2rem;
    color: #3dbbc7;
  }

  .quizHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .category {
    padding: 0em;
  }

  .question {
    font-size: 20px;
    color: #fff ;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(5px);
    margin: 20px 0px 20px 0px ;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .answer {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 20px;
  }

  .footer{
    display: flex;
    justify-content: flex-end;

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
