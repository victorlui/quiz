import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import Container from "../../components/Container";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <h1>
          Welcome to the
          <br />
          Trivia Challenge!
        </h1>

        <p>
          You will be presentd <br /> with 10 True or False <br />
          questions
        </p>

        <p>can you score 100%?</p>

        <button type="button" onClick={() => navigate("/level")}>
          BEGIN
        </button>
      </Card>
    </Container>
  );
};

export default Home;
