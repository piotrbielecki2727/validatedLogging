import { Suspense } from "react";
import Title from "../../components/ui/Title/Title";
import UsersTable from "../../components/UsersTable";
import { styled } from "styled-components";
import TableSkeleton from "../../components/UsersTable/components/TableSkeleton";

const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background.secondary};
  padding: 30px;
  border: ${({ theme }) => theme.colors.borderColor};
  border-radius: 5px;
  -webkit-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 20);
  -moz-box-shadow: -2px 8px 28px -20px rgba(65, 65, 69, 20);
  box-shadow: -2px 12px 34px -20px rgba(65, 65, 69, 20);

  @media (max-width: 768px) {
    padding: 20px;
    max-width: 375px;
    width: 100%;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding: 25px;
    max-width: 768px;
    width: 100%;
  }

  @media (min-width: 1025px) {
    padding: 30px;
    max-width: fit-content;
    width: 100%;
  }
`;

export default function Users() {
  return (
    <Container>
      <Title title="Users" subtitle="Manage users" />
      <Suspense fallback={<TableSkeleton />}>
        <UsersTable />
      </Suspense>
    </Container>
  );
}
