import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import GridViewIcon from "@mui/icons-material/GridView";
import GroupAddOutlinedIcon from "@mui/icons-material/GroupAddOutlined";
import InsightsOutlinedIcon from "@mui/icons-material/InsightsOutlined";
import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
export default function Sidebar() {
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  let navigate = useNavigate();
  const { image, lastName } = user;
  const lstMenu = [
    {
      header: "Tổng quan",
      items: [
        {
          title: "Tổng quan",
          path: "dashboard",
          icon: <GridViewIcon />,
        },
      ],
    },
    {
      header: "Hồ sơ thẩm duyệt",
      items: [
        {
          title: "Phân công hồ sơ",
          path: "design/new",
          icon: <GroupAddOutlinedIcon />,
        },
        {
          title: "Đang thụ lý",
          path: "design/inprocess",
          icon: <InsightsOutlinedIcon />,
        },
        {
          title: "Hoàn thành",
          path: "design/finish",
          icon: <DoneAllOutlinedIcon />,
        },
      ],
    },
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
      {lstMenu.map((menu, index) => (
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          component="nav"
          key={`header_${index}`}
          subheader={
            <ListSubheader component="div">{menu.header}</ListSubheader>
          }
        >
          {menu.items.map((item, index1) => {
            return (
              <ListItemButton
                key={`h${index}_item${index1}`}
                onClick={() => {
                  navigate(item.path, { replace: true });
                }}
              >
                <ListItemIcon
                  sx={
                    location.pathname === `/home/${item.path}`
                      ? { color: "#275b9a" }
                      : {}
                  }
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  sx={
                    location.pathname === `/home/${item.path}`
                      ? { color: "#275b9a", fontWeight: "bold !important" }
                      : {}
                  }
                  primary={item.title}
                />
              </ListItemButton>
            );
          })}
        </List>
      ))}
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
    padding: 10px;
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
  .MuiListSubheader-gutters {
    position: relative;
  }

  .MuiListItemButton-gutters .css-tlelie-MuiListItemText-root {
    a {
      text-decoration: none;
      color: #979797;
      transition: 0.5;
      transition: all 0.5;
      &.active {
        color: #275b9a;
        font-weight: 700;
      }
    }
    &:hover {
      color: #275b9a;
      font-weight: 700;
    }
  }
`;
