import { useState } from "react";

const PointIncreaser = () => {
  const [formData, setFormData] = useState({
    idPersona: "",
    cantidadPuntos: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const makeRequest = () => {
    fetch("http://localhost:8080/cliente/puntos", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest();
    alert("Los puntos se actualizaron correctamente");
    console.log("Form Data Submitted:", formData);
    setFormData({
        idPersona: "",
        cantidadPuntos: "",
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>   
        <div>
          <label htmlFor="idPersona">ID de la persona:</label>
          <input
            type="text"
            id="idPersona"
            name="idPersona"
            value={formData.idPersona}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="nombre">Cantidad de puntos a aumentar:</label>
          <input
            type="text"
            id="cantidadPuntos"
            name="cantidadPuntos"
            value={formData.cantidadPuntos}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default PointIncreaser;
