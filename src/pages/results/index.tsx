import { useLocation, useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

import { CardResult } from "./styles";

interface MyAnswersProp {
  question: string;
  myAnswers: string;
  correct_answer: string;
}

const Results = () => {
  const location: any = useLocation();
  const navigate = useNavigate();
  const myAnswers = location?.state?.myAnswers;

  const myHits = myAnswers.filter(
    (q: MyAnswersProp) => q.myAnswers === q.correct_answer
  );

  return (
    <Container>
      <CardResult>
        <h1>
          You scored <br />
          {myHits.length}/{myAnswers.length}
        </h1>
        {myAnswers.map((a: MyAnswersProp, index: number) => (
          <div className="resultsBox">
            <p>{index + 1} -</p>
            <div
              className="questionText"
              dangerouslySetInnerHTML={{
                __html: a.question,
              }}
            />
            <div className="icon">
              {a.myAnswers === a.correct_answer ? (
                <HiOutlineCheckCircle color="#3dbbc7" size={30} />
              ) : (
                <CgCloseO color="red" size={28} />
              )}
            </div>
          </div>
        ))}

        <button onClick={() => navigate("/")}>PLAY AGAIN??</button>
      </CardResult>
    </Container>
  );
};

export default Results;
