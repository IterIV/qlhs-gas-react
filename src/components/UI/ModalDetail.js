import { useEffect, useState } from "react";
// ?REDUX
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../actions/UserActions";

import moment from "moment";
import DocumentDesign from "../../models/DesignDocument";
import User from "../../models/User";

// ?DIALOG MUI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import Avatar from "@mui/material/Avatar";

import { addUserToDocument } from "../../actions/DesignActions";

const initDocumentDesign = new DocumentDesign({});
const initUser = new User({});
export default function ModalDetail({
  handleClose,
  selectedValue = initDocumentDesign,
  open,
}) {
  const { lstUser } = useSelector((state) => state.userReducer);
  const { authData } = useSelector((state) => state.authReducer);
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    if (authData && authData.token) {
      dispatch(getAllUser(authData.token));
    }
  }, [authData, dispatch]);

  const handleChange = (event) => {
    setName((prev) => event.target.value);
  };
  const handleClickSave = () => {
    const { id } = selectedValue;
    if (!id) {
      setName((prev) => "");
    } else {
      dispatch(addUserToDocument(authData.token, id, name));
      setName((prev) => "");
      handleClose();
    }
  };
  return (
    <Dialog
      open={open}
      onClose={() => {
        setName((prev) => "");
        handleClose();
      }}
    >
      <DialogTitle>Thông tin hồ sơ</DialogTitle>
      <DialogContent>
        <Stack spacing={1}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Stack sx={{ flex: 1 }}>
              <Typography variant="caption" display="block">
                Ngày nhận
              </Typography>
              <Typography variant="body1" display="block">
                {moment(selectedValue.ngayNhan).format("DD/MM/yyyy")}
              </Typography>
            </Stack>
            <Stack sx={{ flex: 1 }}>
              <Typography variant="caption" display="block">
                Ngày trả
              </Typography>
              <Typography variant="body1" display="block">
                {moment(selectedValue.ngayTra).format("DD/MM/yyyy")}
              </Typography>
            </Stack>
          </Stack>
          <Stack>
            <Typography variant="caption" display="block">
              Tên dự án/công trình
            </Typography>
            <Typography variant="body1" display="block">
              {selectedValue.congTrinh}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" display="block">
              Địa điểm xây dựng
            </Typography>
            <Typography variant="body1" display="block">
              {selectedValue.diaDiem}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" display="block">
              Chủ đầu tư
            </Typography>
            <Typography variant="body1" display="block">
              {selectedValue.chuDauTu}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" display="block">
              Đơn vị tư vấn thiết kế
            </Typography>
            <Typography variant="body1" display="block">
              {selectedValue.donViTK}
            </Typography>
          </Stack>
          <Stack>
            <Typography variant="caption" display="block">
              Cán bộ thụ lý
            </Typography>
            <Select value={name} onChange={handleChange} displayEmpty>
              <MenuItem value="">
                <em>Chọn tên cán bộ</em>
              </MenuItem>
              {lstUser.map((item = initUser) => (
                <MenuItem value={item.id} key={item.id}>
                  <Stack direction="row" alignItems="center" spacing={2}>
                    <Avatar alt={item.lastName} src={item.image} />
                    <Typography variant="body1" display="block">
                      {item.lastName}
                    </Typography>
                  </Stack>
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="error"
          sx={{ width: 100 }}
          onClick={() => {
            setName((prev) => "");
            handleClose();
          }}
        >
          Đóng
        </Button>
        <LoadingButton
          variant="contained"
          color="success"
          sx={{ width: 100 }}
          autoFocus
          disabled={name === ""}
          onClick={handleClickSave}
        >
          Lưu
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
}
