import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormRegister from './Components/FormRegister';// Asegúrate de que la ruta sea correcta
import RewardsGrid from './Components/RewardsGrid';
import History from './Components/History';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<FormRegister />} />
          <Route path="/rewards" element={<RewardsGrid />} />
          <Route path="/history/:clientId" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
