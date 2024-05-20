import { Link } from 'react-router-dom';
import '../styles/NavigationMenu.css'; // Asegúrate de importar el archivo CSS

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/register">Registro</Link>
        </li>
        <li>
          <Link to="/rewards">Recompensas</Link>
        </li>
        <li>
          <Link to="/points">Puntos</Link>
        </li>
        <li>
          <Link to="/rewardsForm">Añadir recompensa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;