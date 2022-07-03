import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getNewDesignAction } from "../actions/DesignActions";
import ButtonIcon from "../components/Button/ButtonIcon";
import Table from "../components/Table";
import Modal from "../components/Modal";

export default function DesignNew() {
  const { authData } = useSelector((state) => state.authReducer);
  const { arrData, loading } = useSelector((state) => state.designReducer);
  const { showModal, setShowModal } = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authData && authData.token) {
      dispatch(getNewDesignAction(authData.token));
    }
  }, [authData, dispatch]);

  const headers = [
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
      render: (obj) => {
        return (
          <>
            <ButtonIcon
              icon="person_add"
              onClick={() => {
                setShowModal((prev) => true);
              }}
            />
            <ButtonIcon icon="delete" color="danger" />
          </>
        );
      },
    },
  ];

  return (
    <Container>
      <p className="header">
        Hồ thẩm duyệt sơ mới
        <span className="header__badge">{`${arrData.length} hồ sơ`}</span>
      </p>
      <Table headers={headers} data={arrData} loading={loading} limit={5} />
      <Modal show={showModal} setShow={setShowModal}>
        Hoàn thành
      </Modal>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-left: 280px;
  padding-top: 90px;
  background-color: #fcfdff;
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
