import { Link } from "react-router-dom";
import styled from "styled-components";

// eslint-disable-next-line react/prop-types
export default function Header({ title, span }) {
  return (
    <Wrapper>
      <div className="left">
        <h3>{title}</h3>
        <span>{span}</span>
      </div>
      <Link to={`/`}>All</Link>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  .left {
    span {
      color: gray;
    }
  }
  a {
    color: #4acec4;
    font-size: 16px;
  }
`;
