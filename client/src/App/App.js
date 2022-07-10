import "./App.css";
import React, { useState } from "react";

export default function App() {
  const [formValues, setFormValues] = useState();

  const handleChangeValues = (e) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="App">
      <form>
        <h1>Livro</h1>
        <label for="name">Nome do livro:</label>
        <input type="text" name="name" onChange={handleChangeValues} required />
        <label for="price">Preço:</label>
        <input type="text" name="price" onChange={handleChangeValues} />
        <label for="genre">Escolha o gênero:</label>
        <select name="genre" onChange={handleChangeValues} required>
          <option value="">Selecione aqui</option>
          <option value="Autoajuda">Autoajuda</option>
          <option value="Ficção">Ficção</option>
          <option value="Horror">Horror</option>
          <option value="Humor">Humor</option>
          <option value="Romance">Romance</option>
        </select>
      </form>
    </div>
  );
}
