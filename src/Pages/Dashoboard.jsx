import { useEffect } from "react";
import { Announcemnts, Poster, Quizes } from "../components";
import styled from "styled-components";
import { getAnnouncements, getQuizes, login } from "../redux/GeneralSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Dashoboard() {
  const dispatch = useDispatch();
  const { isLogin } = useSelector((state) => state.general);

  useEffect(() => {
    dispatch(getAnnouncements());
    dispatch(getQuizes());
  }, [dispatch]);

  if (!isLogin) {
    return (
      <LoginButton
        className="login"
        style={{ marginLeft: "300px", marginTop: "100px" }}
        onClick={() => dispatch(login())}
      >
        Login
      </LoginButton>
    );
  }

  return (
    <>
      <Poster />
      <Wrapper>
        <div>
          <Announcemnts />
          <Quizes />
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  margin-left: 250px;
  margin-top: 20px;
  > div {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 20px;
    margin: 0 20px;
  }
  @media (max-width: 1200px) {
    margin-left: 0;
  }
  @media (max-width: 992px) {
  }
`;

const LoginButton = styled.button`
  padding: 20px 40px;
  background-color: #4acec4;
  color: white;
  font-size: 18px;
`;
