import { ImHome } from "react-icons/im";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiGraduateCap } from "react-icons/gi";
import { BsGraphUpArrow } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillBell } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/GeneralSlice";

const pages = [
  {
    id: 1,
    title: "Dashboard",
    icon: <ImHome />,
  },
  {
    id: 2,
    title: "Schedule",
    icon: <AiOutlineSchedule />,
  },
  {
    id: 3,
    title: "Courses",
    icon: <BsGraphUpArrow />,
  },
  {
    id: 4,
    title: "Gradebook",
    icon: <GiGraduateCap />,
  },
  {
    id: 5,
    title: "Performence",
    icon: <BsGraphUpArrow />,
  },
  {
    id: 6,
    title: "Announcements",
    icon: <BsGraphUpArrow />,
  },
];

export default function Sidebar() {
  const { isSideBarOpen } = useSelector((state) => state.general);
  const dispatch = useDispatch();
  return (
    <Wrapper className={`${isSideBarOpen && "active"}`}>
      <div className="logo">Coligo</div>
      <div className="pages">
        <div className="search mobile">
          <input type="text" placeholder="Search" />
          <div className="icon">
            <AiOutlineSearch />
          </div>
        </div>

        {pages.map((page, index) => {
          return (
            <div className={`page ${index === 0 && "active"}`} key={index}>
              <div className="icon">{page.icon}</div>
              <h3 className="title">{page.title}</h3>
            </div>
          );
        })}

        <div className="box mobile">
          <button>
            <AiFillBell />
            <div className="count">
              <p>1</p>
            </div>
          </button>

          <button>
            <IoMail />
            <div className="count">
              <p>1</p>
            </div>
          </button>

          <button>
            <CgProfile />
          </button>
        </div>
      </div>

      <button className="logout" onClick={() => dispatch(logout())}>
        <div>
          <div className="icon">
            <CiLogout />
          </div>
          <p>Logout</p>
        </div>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.aside`
  position: relative;
  position: fixed;
  left: 0;
  top: 0;
  width: 250px; // sidebar width
  height: 100%;
  background-color: #15557b;
  transition: 0.3s;
  z-index: 500;
  .logo {
    padding: 40px;
    font-size: 40px;
    color: white;
  }

  .pages {
    .page {
      display: flex;
      align-items: center;
      gap: 15px;
      padding: 20px 20px;
      cursor: pointer;
      color: white;
      transition: 0.2s;

      &.active {
        background-color: white;
        .title {
          color: #4acec4;
        }
        .icon {
          color: #15557b;
        }
      }
      &:hover {
        background-color: white;
        .title {
          color: #4acec4;
        }
        .icon {
          color: #15557b;
        }
      }

      .icon {
        display: flex;
        align-items: center;
        font-size: 20px;
        color: white;
      }

      .title {
        display: flex;
        align-items: center;
        color: white;
        font-weight: 400;
      }
    }

    .search {
      position: relative;
      margin-bottom: 5px;
      input {
        width: 100%;
        padding: 15px;
        padding-left: 30px;
        border: none;
        background-color: #fff;
        &:focus {
          outline: none;
        }
      }
      .icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
      }
    }

    .box {
      display: flex;
      align-items: center;
      padding-left: 20px;
      margin-top: 10px;

      button {
        font-size: 24px;
        color: #ddd;
        position: relative;
        margin-right: 15px;

        .count {
          position: absolute;
          top: -5px;
          right: -3px;
          background-color: #4acec4;
          padding: 1px 4px;
          border-radius: 50%;
          p {
            font-size: 11px;
            color: white;
          }
        }
      }
    }
  }

  .logout {
    position: absolute;
    bottom: 10px;
    left: 0px;
    color: white;
    gap: 10px;
    font-size: 16px;
    width: 100%;
    padding: 20px 0;
    padding-left: 20px;
    > div {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    &:hover {
      background-color: white;
      color: black;
    }
    .icon {
      display: flex;
      align-items: center;
      font-size: 20px;
    }
  }

  .mobile,
  .box.mobile {
    display: none;
  }

  &.active {
    left: 0;
  }

  @media (max-width: 1200px) {
    left: -250px;
  }

  @media (max-width: 992px) {
    .mobile,
    .box.mobile {
      display: block;
    }
  }
`;
