import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getNewDesignAction } from "../actions/DesignActions";
import ButtonIcon from "../components/Button/ButtonIcon";
import Table from "../components/Table";
import Modal from "../components/Modal";
import DesignDocument from "../models/DesignDocument";
import moment from "moment";

export default function DesignNew() {
  const designDocument = new DesignDocument({});
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState(designDocument);
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
      size: "10",
    },
    {
      title: "Ngày nhận",
      name: "",
      size: "10",
      render: (obj) => {
        return moment(obj.ngayNhan).format("DD/MM/yyyy");
      },
    },
    {
      title: "Ngày trả",
      name: "",
      size: "10",
      render: (obj) => {
        return moment(obj.ngayNhan).format("DD/MM/yyyy");
      },
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
              color="success"
              onClick={() => {
                setShow(true);
                setSelect(obj);
              }}
            />
            <ButtonIcon
              icon="info"
              onClick={() => {
                setShow(true);
                setSelect(obj);
              }}
            />
            <ButtonIcon icon="delete" color="danger" />
          </>
        );
      },
    },
  ];
  const { authData } = useSelector((state) => state.authReducer);
  const { arrData, loading } = useSelector((state) => state.designReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    if (authData && authData.token) {
      dispatch(getNewDesignAction(authData.token));
    }
  }, [authData, dispatch]);

  return (
    <Container>
      <p className="header">
        Hồ thẩm duyệt sơ mới
        <span className="header__badge">{`${arrData.length} hồ sơ`}</span>
      </p>
      <Table headers={headers} data={arrData} loading={loading} limit={5} />
      <Modal show={show} handleHide={() => setShow((prev) => false)}>
        <ModalContent>
          <p className="modal__title">Thông tin hồ sơ</p>
          <div className="field__text">
            <label>
              <span className="material-symbols-outlined">home_work</span>
              Tên công trình
            </label>
            <p>{select.congTrinh}</p>
          </div>
          <div className="field__text">
            <label>
              <span className="material-symbols-outlined">home_pin</span>
              Địa điểm
            </label>
            <p>{select.diaDiem}</p>
          </div>
          <div className="field__text">
            <label>
              <span className="material-symbols-outlined">groups</span>
              Chủ đầu tư
            </label>
            <p>{select.chuDauTu}</p>
          </div>
          <div className="field__text">
            <label>
              <span className="material-symbols-outlined">draw</span>
              Đơn vị thiết kế
            </label>
            <p>{select.donViTK}</p>
          </div>
          <div className="field__text" style={{ width: "50%" }}>
            <label>
              <span className="material-symbols-outlined">draw</span>
              Đơn vị thiết kế
            </label>
            <p>{select.donViTK}</p>
          </div>
          <div className="field__text" style={{ width: "50%" }}>
            <label>
              <span className="material-symbols-outlined">draw</span>
              Đơn vị thiết kế
            </label>
            <p>{select.donViTK}</p>
          </div>
        </ModalContent>
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

const ModalContent = styled.div`
  .modal__title {
    font-weight: 600;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .field__text {
    margin: 10px 0;
    label {
      font-weight: 500;
      font-size: 13px;
      opacity: 0.6;
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      span {
        margin-right: 10px;
        opacity: 0.8;
        font-size: 20px;
      }
    }
    p {
      display: flex;
      align-items: center;
    }
  }
`;
