import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reward from "./Reward";
import "../styles/RewardsGrid.css";

const History = () => {
  const { clientId } = useParams();
  const [transactions, setTransactions] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8080/transacciones/cliente/${clientId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((error) => console.error("Error fetching rewards:", error));
  }, []);

  return (
    <>
      <h1>Historial del cliente con ID: {clientId}</h1>
      <div className="rewards-grid">
        {transactions ? (
          transactions.map((transaction, index) => {
            console.log(transaction);
            return (
              //<li key={index}>{transaction.nombreRecompensa}</li>
              <Reward
                redeemPoints={0}
                rewardInfo={transaction.nombreRecompensa}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  );
};

export default History;
