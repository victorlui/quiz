import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import Container from "../../components/Container";
import Radio from "../../components/RadioButton";
import { api } from "../../services/api";

import { CardQuiz } from "./styles";

interface QuestionsProps {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
}

interface MyAnswersProp {
  question: string;
  myAnswers: string;
  correct_answer: string;
}

const Quiz = () => {
  const { level } = useParams<{ level: string }>();
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [index, setIndex] = useState(0);
  const [questions, setQuestions] = useState<QuestionsProps[]>([]);
  const [answer, setAnswer] = useState("true");
  const [myAnswers, setMyAnswers] = useState<MyAnswersProp[]>([]);

  useEffect(() => {
    async function getQuiz() {
      setLoading(true);
      try {
        const response = await api(
          `?amount=10&difficulty=${level}&type=boolean`
        );
        setQuestions(response.data.results);
      } catch (error: any) {
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }
    getQuiz();
  }, [level]);

  useEffect(() => {
    if (questions.length > 0 && index === questions.length) {
      navigate("/results", { state: { myAnswers } });
    }
  }, [index, myAnswers, navigate, questions]);

  const nextQuestion = () => {
    if (answer === "") {
      toast("Please select an answer");
    } else {
      setMyAnswers((m) => [
        ...m,
        {
          question: questions[index]?.question,
          myAnswers: answer,
          correct_answer: questions[index]?.correct_answer,
        },
      ]);
      setAnswer("");
      setIndex((i) => i + 1);
    }
  };

  return (
    <Container>
      <Toaster />
      <CardQuiz>
        {loading ? (
          <p>Carregando questões</p>
        ) : (
          index !== questions.length && (
            <>
              <div className="quizHeader">
                <div>
                  <h1>Question {index + 1}</h1>
                </div>
                <div className="category">
                  <span>Category:</span>
                  <p>{questions[index]?.category}</p>
                </div>
              </div>
              <hr />

              <div className="question">
                <div
                  dangerouslySetInnerHTML={{
                    __html: questions[index]?.question,
                  }}
                />
                <div className="answer">
                  <Radio
                    label="True"
                    selected={answer}
                    handleSelectChange={(e) => setAnswer(e.target.value)}
                  />
                  <Radio
                    label="False"
                    selected={answer}
                    handleSelectChange={(e) => setAnswer(e.target.value)}
                  />
                </div>
              </div>
            </>
          )
        )}

        {!loading && (
          <div className="footer">
            <button onClick={nextQuestion}>Next Question</button>
          </div>
        )}
      </CardQuiz>
    </Container>
  );
};

export default Quiz;
