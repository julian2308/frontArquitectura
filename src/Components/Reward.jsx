import "../styles/Reward.css";
import { getRandomImage } from "../utils";
const Reward = ({ rewardInfo, redeemPoints }) => {
  const redeem = () => {
    redeemPoints(rewardInfo.puntosRequeridos, rewardInfo.id);
  };

  const image = getRandomImage();

  return redeemPoints !== 0 ? (
    <div className="reward">
      <p>Nombre: {rewardInfo.nombre}</p>
      <p>Descripcion: {rewardInfo.descripcion}</p>
      <p>Categoria: {rewardInfo.categoria}</p>
      <p>Puntos requeridos: {rewardInfo.puntosRequeridos}</p>

      <img src={image} alt={rewardInfo.nombre} />
      <div>
        <button className="redeem-button" onClick={redeem}>
          Canjear
        </button>
      </div>
    </div>
  ) : (
    <div className="reward">
      <p>Nombre: {rewardInfo}</p>
      <img src={image} alt={rewardInfo.nombre} />
    </div>
  );
};

export default Reward;
