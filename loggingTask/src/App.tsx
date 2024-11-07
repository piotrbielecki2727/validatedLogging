import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import AppRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #edf2f7;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyles />
      <ToastContainer />
      <AppRoutes />
    </AppContainer>
  );
}

export default App;
