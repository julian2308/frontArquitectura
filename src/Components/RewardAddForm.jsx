import "../styles/FormRegister.css"; // Asegúrate de que la ruta sea correcta
import { useState } from "react";

const RewardAddForm = () => {


  const [formData, setFormData] = useState({
    nombre: "",
    descripcion: "",
    categoria: "",
    puntosRequeridos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const makeRequest = async () => {

    await fetch("http://localhost:8080/recompensa", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
    alert("Fue registrado exitosamente")
    console.log("Form Data Submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="descripcion">Descripcion:</label>
        <input
          type="text"
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="categoria">Categoría:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="puntosRequeridos">Puntos requeridos:</label>
        <input
          type="text"
          id="puntosRequeridos"
          name="puntosRequeridos"
          value={formData.puntosRequeridos}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

export default RewardAddForm;