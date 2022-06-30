import styled from "styled-components";
import moment from "moment";
import Spinner from "./Spinner";
export default function Table({ header = [], data, ...props }) {
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
  const renderTableItem = () => {
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
      <TableContent>
        <Loading>
          <Spinner size="20" color="white" />
        </Loading>
        {renderTableItem()}
      </TableContent>
    </Container>
  );
}
const Container = styled.div`
  max-height: 400px;
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
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
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
const Loading = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;
