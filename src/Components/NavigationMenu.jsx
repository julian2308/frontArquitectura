import { Link } from 'react-router-dom';
import '../styles/NavigationMenu.css'; // Asegúrate de importar el archivo CSS

const NavigationMenu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/frontArquitectura">Inicio</Link>
        </li>
        <li>
          <Link to="/frontArquitectura/register">Registro</Link>
        </li>
        <li>
          <Link to="/frontArquitectura/rewards">Recompensas</Link>
        </li>
        <li>
          <Link to="/frontArquitectura/points">Puntos</Link>
        </li>
        <li>
          <Link to="/frontArquitectura/rewardsForm">Añadir recompensa</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;