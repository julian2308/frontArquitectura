import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ClientIdInput = () => {
  const [clientId, setClientId] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setClientId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (clientId.trim()) {
      navigate(`/frontArquitectura/history/${clientId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Introduzca ID a buscar.
        <input
          type="text"
          value={clientId}
          onChange={handleInputChange}
          placeholder="Id Cliente"
        />
      </label>
      <button type="submit">Ir al historial</button>
    </form>
  );
};

export default ClientIdInput