import styled from "styled-components";
import poster from "../assets/exam.svg";
export default function Poster() {
  return (
    <Wrapper>
      <div style={{ backgroundImage: `url(${poster})` }}>
        <h1>EXAMS TIME</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur,earum ad laborum ab impedit
          ipsa perspiciatis nemo quam adipisci ex est ipsam. <br />
          learum ad laborum ab impedit ipsa perspiciatis nemo quam adipisci ex
          est ipsam.
        </p>
        <span>Nothing happens untill somehing moves ~ Albert Einsten</span>
        <button>View exams tips</button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 100px;
  margin-left: 250px;
  div {
    background-position: center right;
    background-repeat: no-repeat no-repeat;
    padding: 50px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: 10px;
    margin-left: 20px;
    margin-right: 20px;

    p {
      line-height: 1.5;
    }
    span {
      color: gray;
    }
    button {
      width: fit-content;
      padding: 10px 25px;
      background-color: #4acec4;
      color: white;
      font-size: 18px;
      border-radius: 5px;
    }
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
`;
