import "./App.css";

export default function App() {
  return (
    <div className="App">
      <form>
        <h1>Livro</h1>
        <label for="name" >Nome do livro:</label>
        <input type="text" name="name" required/>
        <label for="price" >Preço:</label>
        <input type="text" name="price" />
        <label for="genre">Escolha o gênero:</label>
        <select name="genre" required>
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
