import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormRegister from './Components/FormRegister';// Asegúrate de que la ruta sea correcta
import RewardsGrid from './Components/RewardsGrid';
import History from './Components/History';
import PointIncreaser from './Components/PointIncreaser';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<FormRegister />} />
          <Route path="/rewards" element={<RewardsGrid />} />
          <Route path="/history/:clientId" element={<History />} />
          <Route path="/points" element={<PointIncreaser />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
