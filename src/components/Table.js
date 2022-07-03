import styled from "styled-components";

const initHeaders = [
  {
    title: "",
    name: "",
    size: 0,
  },
];

export default function Table({
  headers = initHeaders,
  data = [],
  loading,
  limit,
}) {
  const renderHeader = () => {
    return headers.map((header, index) => (
      <TableCell size={header.size} key={`header__${index}`}>
        {header?.title}
      </TableCell>
    ));
  };

  const renderLoading = () => {
    return (
      <Loading>
        <TableRow>
          {headers.map((header, index) => (
            <TableCell size={header.size} key={`loading__${index}`}></TableCell>
          ))}
        </TableRow>
      </Loading>
    );
  };
  const renderNoItem = () => {
    return (
      <NoItem>
        <p>Không có dữ liệu</p>
      </NoItem>
    );
  };
  const renderCells = (obj, i) => {
    return headers.map((header, index) => {
      if ("render" in header) {
        return (
          <TableCell key={`cell_${index}`} size={header.size}>
            {header.render(obj)}
          </TableCell>
        );
      }
      if (header.name === "index") {
        return (
          <TableCell key={`cell_${index}`} size={header.size}>
            {i + 1}
          </TableCell>
        );
      }
      return (
        <TableCell key={`cell_${index}`} size={header.size}>
          <p>{obj[header.name]}</p>
        </TableCell>
      );
    });
  };

  const renderData = () => {
    return data.map((obj, index) => {
      return (
        <TableRow key={`item__${index}`}>{renderCells(obj, index)}</TableRow>
      );
    });
  };

  const renderTableContent = () => {
    if (loading) {
      return renderLoading();
    }
    if (data.length === 0 && !loading) {
      return renderNoItem();
    }
    return renderData();
  };

  return (
    <Container>
      <TableHeader>{renderHeader()}</TableHeader>
      <TableContent>{renderTableContent()}</TableContent>
      <Padging></Padging>
    </Container>
  );
}
const Container = styled.div`
  overflow-y: auto;
`;
const TableHeader = styled.div`
  display: flex;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 13px;
  opacity: 0.6;
  padding: 10px;
`;
const TableCell = styled.div`
  width: ${(props) => `${props.size}%`};
  padding: 0 6px;
  &.first {
    font-weight: 600;
    color: #275b9a;
  }
`;
const TableRow = styled.div`
  display: flex;
  margin: 10px 0;
  padding: 20px 15px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
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
  ${TableCell} {
    animation: skeleton-loading 1s linear infinite alternate;
    height: 10px;
    margin: 0 2px;
    border-radius: 5px;
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
