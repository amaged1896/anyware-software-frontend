/* eslint-disable react/prop-types */
import styled from "styled-components";
import profile from "../assets/profile.jpg";

export default function SingleAnnouncemnt({ announce }) {
  return (
    <Wrapper className="person-announce">
      <div className="person">
        <div className="img">
          <img src={profile} alt="profile pic" />
        </div>
        <div className="info">
          <h4 className="name">{announce?.createdBy}</h4>
          <span className="title">{announce.title}</span>
        </div>
      </div>

      <div className="announce">{announce.announcement}</div>
    </Wrapper>
  );
}

const Wrapper = styled.article`
  display: flex;
  align-items: flex-start;
  /* flex-direction: column; */
  .person {
    width: 30%;
    display: flex;
    align-items: center;
    gap: 10px;
    .img {
      img {
        width: 50px;
        border-radius: 50%;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      gap: 5px;
      span {
        font-size: 14px;
      }
    }
  }
  .announce {
    width: 80%;
    line-height: 1.3;
    color: gray;
  }

  @media (max-width: 992px) {
    /* .person {
      flex-direction: column;
      width: 20%;
      .info {
        text-align: center;
      }
    } */
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    .person {
      width: 100%;
      .img {
        img {
          width: 30px;
        }
      }
      .info {
        h4 {
          font-size: 14px;
        }
        span {
          font-size: 12px;
          /* color: red; */
        }
      }
    }
    .announce {
      width: 100%;
      font-size: 14px;
    }
  }
`;
