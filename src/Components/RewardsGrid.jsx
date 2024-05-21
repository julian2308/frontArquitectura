import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Reward from "./Reward";
import "../styles/RewardsGrid.css";

const RewardsGrid = () => {
  const [rewards, setRewards] = useState([]);
  const [availablePoints, setAvailablePoints] = useState(0);
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [clientId, setClientId] = useState(null);
  const [clientName, setClientName] = useState(null);
  const [trigger, setTrigger] = useState(0);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setClientId(inputValue);
  };

  const handleRedirect = () => {
    navigate(`/frontArquitectura/history/${clientId}`);
  };

  const makeRequestTransaction = async (idReward) => {
    const dataToSend = {
      clienteId: clientId,
      recompensaId: idReward,
    };
    await fetch("http://localhost:8080/transaccion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataToSend),
    });

    setTrigger((prev) => prev + 1);
  };

  const redeemPoints = (necessaryPoints, idReward) => {
    if (availablePoints >= necessaryPoints) {
      makeRequestTransaction(idReward);
      const confirm = prompt(
        `Está seguro que desea redimir esta recompensa por ${necessaryPoints} ,su nuevo saldo será ${
          availablePoints - necessaryPoints
        }`,
        1
      );
      confirm ? alert("Recompensa canjeada exitosamente") : null;
    } else {
      alert("Cantidad de puntos insuficientes");
    }
  };

  const getPointsFromUserById = () => {
    fetch(`http://localhost:8080/cliente/${clientId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setAvailablePoints(data.puntos);
        setClientName(data.nombre);
      })
      .catch((error) => console.error("Error fetching xd:", error));
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

  useEffect(() => {
    getPointsFromUserById();
  }, [clientId, trigger]);

  return clientId ? (
    <div>
      <div className="info">
        <h3>Las recompensas disponibles actualmente son:</h3>
        <h3>Puntos: {availablePoints}</h3>
        <h3>Cliente: {clientName}</h3>
      </div>
      <div className="rewards-grid">
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
      </div>
      <button onClick={handleRedirect}>Ir al historial</button>
    </div>
  ) : (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="inputField">Introduzca el id de la persona:</label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default RewardsGrid;
