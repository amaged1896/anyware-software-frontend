import styled from "styled-components";
import { AiFillBell, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { IoMail } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../redux/GeneralSlice";

export default function Navbar() {
  const { isSideBarOpen, isLogin } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <h2>{isLogin && "Welcome Talia,"}</h2>
      <div className="box">
        <div className="search">
          <input type="text" placeholder="Search" />
          <div className="icon">
            <AiOutlineSearch />
          </div>
        </div>
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

        {/* menu btn for screen size < 1200 */}
        <button
          className="menu-btn"
          onClick={() =>
            isSideBarOpen ? dispatch(closeSidebar()) : dispatch(openSidebar())
          }
        >
          {isSideBarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* menu btn for width < 900 */}
      <button
        className="menu-btn"
        onClick={() =>
          isSideBarOpen ? dispatch(closeSidebar()) : dispatch(openSidebar())
        }
      >
        {isSideBarOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  position: fixed;
  left: 250px;
  top: 0;
  width: calc(100% - 250px); // navbar width (100% - sidebar width)
  height: 80px;
  background-color: white;
  padding-left: 40px;
  padding-right: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .box {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      font-size: 24px;
      color: #477488;
      position: relative;

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

    .search {
      position: relative;
      input {
        padding: 8px;
        padding-left: 30px;
        border-radius: 10px;
        border: 1px solid #eee;
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
  }

  .menu-btn {
    display: none;
    font-size: 24px;
  }

  @media (max-width: 1200px) {
    left: 0;
    width: 100%;
    .box {
      .menu-btn {
        display: block;
      }
    }
  }

  @media (max-width: 992px) {
    .box {
      display: none;
    }
    .menu-btn {
      display: block;
    }
  }
`;
