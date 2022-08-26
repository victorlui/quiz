import { useNavigate } from "react-router";
import Card from "../../components/Card";
import Container from "../../components/Container";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Card>
        <h1>Página não encontrada</h1>

        <button type="button" onClick={() => navigate("/")}>
          Voltar para tela inicial
        </button>
      </Card>
    </Container>
  );
};

export default NotFound;
