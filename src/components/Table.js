import styled from "styled-components";
import moment from "moment";
export default function Table({ header = [], data = [], loading, limit }) {
  const renderData = (data, header, count) => {
    if (header.name === "ngayNhan" || header.name === "ngayTra") {
      return moment(data[header.name]).format("DD/MM/YYYY");
    }
    if (header.name === "") {
      return header.render({ ...data });
    }
    if (header.name === "index") {
      return count + 1;
    }
    return data[header.name];
  };
  const renderPadging = () => {
    if (data.length > limit) {
    }
  };
  const renderTableItem = () => {
    console.log(loading);
    if (loading) {
      return (
        <Loading>
          <TableItem>
            {header.map((item, index) => (
              <TableCell size={item.size} key={`header_${index}`}>
                <p></p>
              </TableCell>
            ))}
          </TableItem>
        </Loading>
      );
    }
    if (data.length === 0 && !loading) {
      return (
        <NoItem>
          <p>Không có dữ liệu</p>
        </NoItem>
      );
    }
    return data.map((item, count) => (
      <TableItem key={`${item.id}`}>
        {header.map((iHeader, index) => (
          <TableCell
            size={iHeader.size}
            key={`${item.id}_${index}`}
            className={`${index === 0 ? "first" : ""}`}
          >
            {renderData(item, iHeader, count)}
          </TableCell>
        ))}
      </TableItem>
    ));
  };
  return (
    <Container>
      <div className="table__header">
        {header.map((item, index) => (
          <TableCell size={item.size} key={`header_${index}`}>
            {item.title}
          </TableCell>
        ))}
      </div>
      <TableContent>{renderTableItem()}</TableContent>
      <Padging></Padging>
    </Container>
  );
}
const Container = styled.div`
  overflow-y: auto;
  .table__header {
    display: flex;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    opacity: 0.6;
    padding: 10px;
  }
`;
const TableCell = styled.div`
  width: ${(props) => `${props.size}%`};
  padding: 0 6px;
  &.first {
    font-weight: 600;
    color: #275b9a;
  }
`;
const TableItem = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: #f4f4f4;
  }
`;
const TableContent = styled.div`
  position: relative;
`;
const NoItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  border: 1px solid #ddd;
  border-radius: 10px;
`;

const Loading = styled.div`
  p {
    height: 13px;
    animation: skeleton-loading 1s linear infinite alternate;
  }
  @keyframes skeleton-loading {
    0% {
      background-color: hsl(200, 20%, 70%);
    }
    100% {
      background-color: hsl(200, 20%, 95%);
    }
  }
`;
const Padging = styled.div``;
