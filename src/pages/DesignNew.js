import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getNewDesignAction } from "../actions/DesignActions";
import ButtonIcon from "../components/Button/ButtonIcon";
import Table from "../components/Table";
export default function DesignNew() {
  const headerNew = [
    {
      title: "STT",
      name: "index",
      size: "5",
    },
    {
      title: "Tên công trình",
      name: "congTrinh",
      size: "25",
    },
    {
      title: "Chủ đầu tư",
      name: "chuDauTu",
      size: "25",
    },
    {
      title: "Đơn vị thiết kế",
      name: "donViTK",
      size: "15",
    },
    {
      title: "Ngày nhận",
      name: "ngayNhan",
      size: "10",
    },
    {
      title: "Ngày trả",
      name: "ngayTra",
      size: "10",
    },
    {
      title: "",
      name: "",
      size: "10",
      render: ({ id }) => {
        return (
          <>
            <ButtonIcon
              icon="person_add"
              onClick={() => {
                console.log(id);
              }}
            />
            <ButtonIcon
              icon="delete"
              color="danger"
              onClick={() => {
                console.log(id);
              }}
            />
          </>
        );
      },
    },
  ];
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.authReducer);
  const { arrData } = useSelector((state) => state.designReducer);
  useEffect(() => {
    // const data = localStorage.getItem("user");
    if (authData && authData.token) {
      dispatch(getNewDesignAction(authData.token));
    }
  }, [authData, dispatch]);
  return (
    <Container>
      <p className="header">
        Hồ thẩm duyệt sơ mới{" "}
        <span className="header__badge">{`${arrData.length} hồ sơ`}</span>
      </p>
      <Table header={headerNew} data={arrData} />
    </Container>
  );
}
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 280px;
  padding-top: 90px;
  .header {
    font-weight: 600;
    font-size: 18px;
    color: #2f80db;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    .header__badge {
      font-size: 12px;
      border-radius: 10px;
      background-color: #85baff;
      color: white;
      padding: 5px 10px;
      margin-left: 10px;
    }
  }
`;
