import styled from "styled-components";
import AppRoutes from "./routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  position: relative;
  background: ${({ theme }) => theme.body};
`;

function App() {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <ToastContainer />
        <AppRoutes />
      </AppContainer>
    </Router>
  );
}

export default App;
