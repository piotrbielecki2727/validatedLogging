import styled from 'styled-components';
import AppRoutes from './routes/AppRoutes';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import './languages/i18n';

const AppContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: auto;
  align-items: start;
  min-height: 80vh;
  position: relative;
  background: ${({ theme }) => theme.body};

  @media (max-width: 480px) {
    max-width: 100%;
    padding: 10px;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 600px;
    padding: 20px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    max-width: 800px;
    padding: 30px;
  }

  @media (min-width: 1025px) {
    max-width: 1200px;
    padding: 40px;
  }
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
