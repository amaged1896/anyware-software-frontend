import styled from "styled-components";
import Header from "./Header";
import SingleAnnouncemnt from "./SingleAnnouncemnt";
import { useSelector } from "react-redux";
export default function Announcemnts() {
  const { isLoading, isError, announcements } = useSelector(
    (state) => state.general
  );

  if (isLoading) {
    return <h4>loading...</h4>;
  }
  if (isError) {
    return <h4>something went wrong...</h4>;
  }
  return (
    <Wrapper>
      <Header title={"Announcements"} span={"Lorem ipsum dolor sit amet."} />

      <div className="announces">
        {announcements.length > 4
          ? announcements.slice(0, 4).map((announce) => {
              return (
                <SingleAnnouncemnt announce={announce} key={announce._id} />
              );
            })
          : announcements.map((announce) => {
              return (
                <SingleAnnouncemnt announce={announce} key={announce._id} />
              );
            })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: white;
  width: calc(75% - 10px);
  padding: 20px;

  .announces {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
  @media (max-width: 992px) {
    width: calc(100%);
  }
`;
