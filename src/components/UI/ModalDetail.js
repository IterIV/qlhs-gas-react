// import { useEffect, useState } from "react";
// // ?REDUX
// import { useDispatch, useSelector } from "react-redux";
// import { getAllUser } from "../../redux/actions/UserActions";
// import { addUserToDocument } from "../../redux/actions/DocumentAction";

// import moment from "moment";
// import DocumentDesign from "../../models/DesignDocument";
// import User from "../../models/User";

// // ?DIALOG MUI
// import Dialog from "@mui/material/Dialog";
// import DialogTitle from "@mui/material/DialogTitle";
// import DialogContent from "@mui/material/DialogContent";
// import DialogActions from "@mui/material/DialogActions";

// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import Select from "@mui/material/Select";
// import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
// import LoadingButton from "@mui/lab/LoadingButton";
// import Avatar from "@mui/material/Avatar";

// // import { addUserToDocument } from "../../actions/DesignActions";

// const initDocumentDesign = new DocumentDesign({});
// const initUser = new User({});
// export default function ModalDetail({
//   handleClose,
//   selectedValue = initDocumentDesign,
//   open,
// }) {
//   const [name, setName] = useState("");

//   const { listUser } = useSelector((state) => state.listUser);
//   const { loading } = useSelector((state) => state.document);
//   const { user } = useSelector((state) => state.auth);

//   const dispatch = useDispatch();
//   useEffect(() => {
//     if (user && user.token) {
//       dispatch(getAllUser(user.token));
//     }
//   }, [user, dispatch]);

//   const handleChange = (event) => {
//     setName((prev) => event.target.value);
//   };
//   const handleReset = () => {
//     handleClose();
//     setName((prev) => "");
//   };
//   const handleClickSave = () => {
//     const { id } = selectedValue;
//     if (!id) {
//       setName((prev) => "");
//     } else {
//       dispatch(addUserToDocument(user.token, id, name, handleReset));
//     }
//   };

//   return (
//     <Dialog
//       open={open}
//       onClose={() => {
//         setName((prev) => "");
//         handleClose();
//       }}
//     >
//       <DialogTitle>Thông tin hồ sơ</DialogTitle>
//       <DialogContent>
//         <Stack spacing={1}>
//           <Stack
//             direction="row"
//             alignItems="center"
//             justifyContent="space-between"
//           >
//             <Stack sx={{ flex: 1 }}>
//               <Typography variant="caption" display="block">
//                 Ngày nhận
//               </Typography>
//               <Typography variant="body1" display="block">
//                 {moment(selectedValue?.ngayNhan).format("DD/MM/yyyy")}
//               </Typography>
//             </Stack>
//             <Stack sx={{ flex: 1 }}>
//               <Typography variant="caption" display="block">
//                 Ngày trả
//               </Typography>
//               <Typography variant="body1" display="block">
//                 {moment(selectedValue?.ngayTra).format("DD/MM/yyyy")}
//               </Typography>
//             </Stack>
//           </Stack>
//           <Stack>
//             <Typography variant="caption" display="block">
//               Tên dự án/công trình
//             </Typography>
//             <Typography variant="body1" display="block">
//               {selectedValue?.congTrinh}
//             </Typography>
//           </Stack>
//           <Stack>
//             <Typography variant="caption" display="block">
//               Địa điểm xây dựng
//             </Typography>
//             <Typography variant="body1" display="block">
//               {selectedValue?.diaDiem}
//             </Typography>
//           </Stack>
//           <Stack>
//             <Typography variant="caption" display="block">
//               Chủ đầu tư
//             </Typography>
//             <Typography variant="body1" display="block">
//               {selectedValue?.chuDauTu}
//             </Typography>
//           </Stack>
//           <Stack>
//             <Typography variant="caption" display="block">
//               Đơn vị tư vấn thiết kế
//             </Typography>
//             <Typography variant="body1" display="block">
//               {selectedValue?.donViTK}
//             </Typography>
//           </Stack>
//           <Stack>
//             <Typography variant="caption" display="block">
//               Cán bộ thụ lý
//             </Typography>
//             <Select value={name} onChange={handleChange} displayEmpty>
//               <MenuItem value="" sx={{ py: 2 }}>
//                 <em>Chọn tên cán bộ</em>
//               </MenuItem>
//               {listUser.map((user = initUser) =>
//                 user.enabled === 1 ? (
//                   <MenuItem value={user.id} key={user.id}>
//                     <Stack direction="row" alignItems="center" spacing={2}>
//                       <Avatar alt={user.lastName} src={user.image} />
//                       <Typography variant="body1" display="block">
//                         {user.lastName}
//                       </Typography>
//                     </Stack>
//                   </MenuItem>
//                 ) : null
//               )}
//             </Select>
//           </Stack>
//         </Stack>
//       </DialogContent>
//       <DialogActions>
//         <Button
//           variant="outlined"
//           color="error"
//           sx={{ width: 130 }}
//           onClick={() => {
//             setName((prev) => "");
//             handleClose();
//           }}
//         >
//           Đóng
//         </Button>
//         <LoadingButton
//           loading={loading}
//           variant="contained"
//           loadingIndicator="Đang xử lý.."
//           color="success"
//           sx={{ width: 180 }}
//           autoFocus
//           disabled={name === ""}
//           onClick={handleClickSave}
//         >
//           Chuyển hồ sơ
//         </LoadingButton>
//       </DialogActions>
//     </Dialog>
//   );
// }
