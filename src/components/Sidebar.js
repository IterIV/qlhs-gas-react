import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
export default function Sidebar() {
  const location = useLocation();
  const { image, lastName } = useSelector(
    (state) => state.authReducer.authData
  );
  const lstMenu = [
    {
      title: "Tổng quan",
      path: "dashboard",
      icon: "dashboard"
    },
    {
      title: "Hồ sơ thẩm duyệt",
      path: "",
      icon: ""
    },
    {
      title: "Phân công hồ sơ",
      path: "design/new",
      icon: "library_add"
    },
    {
      title: "Đang thụ lý",
      path: "design/inprocess",
      icon: "dashboard"
    },
    {
      title: "Hoàn thành",
      path: "design/finish",
      icon: "dashboard"
    }
  ];
  return (
    <Container>
      <div className="title">
        <p>Quản lý hồ sơ</p>
      </div>
      <div className="user">
        <img src={image ? image : ""} alt={lastName ? lastName : ""} />
        <p>{lastName ? lastName : ""}</p>
      </div>
      <ul className="menu">
        {lstMenu.map((item, index) =>
          item.path === "" ? (
            <p className="menu__header" key={`menu__${index}`}>
              {item.title}
            </p>
          ) : (
            <li
              className={`menu__item ${
                location.pathname === `/home/${item.path}` ? "active" : ""
              }`}
              key={`menu__${index}`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <Link to={item.path}>{item.title}</Link>
            </li>
          )
        )}
      </ul>
    </Container>
  );
}
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 260px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 20px;
  .title {
    font-size: 18px;
    text-align: center;
    font-weight: 600;
    text-transform: capitalize;
  }
  .user {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    margin: 20px 0;
    border: 1px solid #ddd;
    transition: 0.5s;
    cursor: pointer;
    &:hover {
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      border-color: transparent;
    }
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
      object-position: center;
    }
    p {
      margin-left: 10px;
      font-weight: 600;
      color: #2971bd;
    }
  }
  .menu {
    margin-top: 15px;
    .menu__header {
      font-weight: 700;
      text-transform: uppercase;
      font-size: 10px;
      margin: 5px 0;
    }
  }

  .menu__item {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 20px 0;
    transition: all 0.5;
    span {
      font-size: 18px;
      color: #979797;
      transition: all 0.5;
    }
    a {
      text-decoration: none;
      margin-left: 10px;
      color: #979797;
      transition: 0.5;
      font-size: 14px;
      font-weight: 400;
      transition: all 0.5;
    }
    &:hover,
    &.active {
      a,
      span {
        color: #275b9a;
        font-weight: 700;
      }
    }
  }
`;
