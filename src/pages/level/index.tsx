import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Card from "../../components/Card";
import Container from "../../components/Container";
import { BtnLevel } from "./styles";

const Level = () => {
  const navigate = useNavigate();
  const [level, setLevel] = useState("");

  return (
    <Container>
      <Toaster />
      <Card>
        <h1>Select level</h1>
        <BtnLevel
          level="easy"
          selected={level}
          onClick={() => setLevel("easy")}
        >
          Easy
        </BtnLevel>
        <BtnLevel
          level="medium"
          selected={level}
          onClick={() => setLevel("medium")}
        >
          Medium
        </BtnLevel>
        <BtnLevel
          level="hard"
          selected={level}
          onClick={() => setLevel("hard")}
        >
          Hard
        </BtnLevel>
        <button
          onClick={() => {
            if (level === "") {
              toast("Please, Select Level");
            } else {
              navigate(`/quiz/${level}`);
            }
          }}
        >
          INICIAR QUIZ
        </button>
      </Card>
    </Container>
  );
};

export default Level;
