import logo from './logo.svg';
import './App.css';
import Banner from './Componentes/Banner/Banner.js';

function App() {
  return (
    <div className="App">
      <Banner/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem-Vindo ao React!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
