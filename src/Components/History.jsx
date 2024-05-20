import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Reward from "./Reward";

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
    <div>
      <h1>History for Client ID: {clientId}</h1>

      {transactions
        ? transactions.map((transaction,index) => {
            console.log(transaction);
            return (
              //<li key={index}>{transaction.nombreRecompensa}</li>
              <Reward redeemPoints={0} rewardInfo={transaction.nombreRecompensa}/>
            );
          })
        : 
        <p>Loading...</p>
        }
    </div>
  );
};

export default History;
