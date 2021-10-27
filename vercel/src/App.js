import './App.css';
import imagem from './components/homem-feliz-dinheiro.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={imagem}/>
        <p>
          O primeiro milhão a gente nunca esquece.
        </p>
      </header>
    </div>
  );
}

export default App;
