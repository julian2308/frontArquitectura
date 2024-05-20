import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './Components/RegisterForm';// Asegúrate de que la ruta sea correcta
import RewardsGrid from './Components/RewardsGrid';
import History from './Components/History';
import PointIncreaser from './Components/PointIncreaser';
import NavigationMenu from './Components/NavigationMenu';
import ClientIdInput from './Components/ClientIdInput';
import RewardAddForm from './Components/RewardAddForm';

const App = () => {
  return (
    <Router>
      <div>
      <NavigationMenu/>
      
        <Routes>
          <Route path="/" element={<ClientIdInput/>} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/rewards" element={<RewardsGrid />} />
          <Route path="/history/:clientId" element={<History />} />
          <Route path="/points" element={<PointIncreaser />} />
          <Route path="/rewardsForm" element={<RewardAddForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
