import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reward from "./Reward";
import "../styles/RewardsGrid.css";

const RewardsGrid = () => {
  const [rewards, setRewards] = useState([]);
  const [availablePoints] = useState(10);
  const navigate = useNavigate();
  const [clientId] = useState(1);

  const handleRedirect = () => {
    navigate(`/history/${clientId}`);
  };

  const makeRequestTransaction = async (idReward) => {
    const dataToSend = {
      clienteId: 1,
      recompensaId: idReward,
    };
    await fetch("http://localhost:8080/transaccion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });
  };

  const redeemPoints = (necessaryPoints, idReward) => {
    if (availablePoints >= necessaryPoints) {
      makeRequestTransaction(idReward);
      alert("Recompensa canjeada exitosamente");
    }
  };

  useEffect(() => {
    fetch("http://localhost:8080/recompensas", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setRewards(data))
      .catch((error) => console.error("Error fetching rewards:", error));
  }, []);

  return (
    <div>
      <div className="info">
        <h3>Las recompensas disponibles actualmente son:</h3>
        <h3>Puntos: {availablePoints}</h3>
      </div>

      {rewards
        ? rewards.map((reward) => {
            console.log(reward.descripcion);
            return (
              <Reward
                rewardInfo={reward}
                redeemPoints={redeemPoints}
                key={reward.id}
              />
            );
          })
        : null}
        <button onClick={handleRedirect}>Go to History</button>
    </div>
  );
};

export default RewardsGrid;
