import styled from "styled-components";

const Container = styled.div`
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th``;

const TableRow = styled.tr``;

const TableHead = styled.th<{ hiddenOnMd?: boolean }>`
  width: 100px;

  ${(props) =>
    props.hiddenOnMd &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

const TableBody = styled.tbody``;

const TableCell = styled.td<{ hiddenOnMd?: boolean }>`
  ${(props) =>
    props.hiddenOnMd &&
    `
    @media (max-width: 768px) {
      display: none;
    }
  `}
`;

const StyledSkeleton = styled.div<{
  height?: string;
  width?: string;
  rounded?: boolean;
}>`
  background-color: gray;
  height: ${(props) => props.height || "auto"};
  width: ${(props) => props.width || "auto"};
  border-radius: ${(props) => (props.rounded ? "0.375rem" : "0")};
`;

export default function Component() {
  return (
    <Container>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <StyledSkeleton height="1rem" width="100%" />
            </TableHead>
            <TableHead>
              <StyledSkeleton height="1rem" width="100%" />
            </TableHead>
            <TableHead hiddenOnMd>
              <StyledSkeleton height="1rem" width="100%" />
            </TableHead>
            <TableHead hiddenOnMd>
              <StyledSkeleton height="1rem" width="100%" />
            </TableHead>
            <TableHead hiddenOnMd>
              <StyledSkeleton height="1rem" width="100%" />
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[...Array(5)].map((_, index) => (
            <TableRow key={index}>
              <TableCell>
                <StyledSkeleton height="3rem" width="100%" rounded />
              </TableCell>
              <TableCell>
                <StyledSkeleton height="1rem" width="100%" />
              </TableCell>
              <TableCell hiddenOnMd>
                <StyledSkeleton height="1rem" width="100%" />
              </TableCell>
              <TableCell hiddenOnMd>
                <StyledSkeleton height="1rem" width="100%" />
              </TableCell>
              <TableCell hiddenOnMd>
                <StyledSkeleton height="1rem" width="100%" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
