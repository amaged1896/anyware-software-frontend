/* eslint-disable react/prop-types */
import { PiTimerFill } from "react-icons/pi";
import styled from "styled-components";

export default function SingleQuiz({ quiz }) {
  return (
    <Wrapper className="quiz">
      <div className="title">
        <PiTimerFill /> Unit 2 quiz
      </div>
      <ul>
        <li>
          Course: <span>{quiz?.course}</span>
        </li>
        <li>
          Topic: <span>{quiz?.topic}</span>
        </li>
        <li>
          Dueto: <span>{quiz?.dueTo}</span>
        </li>
      </ul>
      <button>Start Quiz</button>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  .title {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    svg {
      font-size: 20px;
      color: #4acec4;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
    li {
      color: gray;
    }
  }
  button {
    margin-top: 10px;
    border: 1px solid #4acec4;
    width: 100%;
    padding: 10px;
  }

  @media (max-width: 992px) {
    width: calc((100% / 3) - (40px / 3));
  }
  @media (max-width: 768px) {
    width: calc((100% / 2) - (20px / 2));
  }
  @media (max-width: 576px) {
    width: calc(100%);
  }
`;
