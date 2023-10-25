import styled from "styled-components";
import Header from "./Header";
import SingleQuiz from "./SingleQuiz";
import { useSelector } from "react-redux";
export default function Quizes() {
  const { isLoading, isError, quizes } = useSelector((state) => state.general);

  if (isLoading) {
    return <h4>loading...</h4>;
  }
  if (isError) {
    return <h4>something went wrong...</h4>;
  }
  return (
    <Wrapper>
      <Header title={"What's due"} span={"Lorem ipsum dolor sit amet."} />
      <div className="quizes">
        {quizes.length > 3
          ? quizes.slice(0, 3).map((quiz) => {
              return <SingleQuiz quiz={quiz} key={quiz._id} />;
            })
          : quizes.map((quiz) => {
              return <SingleQuiz quiz={quiz} key={quiz._id} />;
            })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: calc(25% - 10px);
  background-color: white;
  padding: 15px;
  .quizes {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 20px;
  }
  @media (max-width: 992px) {
    width: calc(100%);
    .quizes {
      flex-direction: row;
      gap: 20px;
    }
  }
`;
