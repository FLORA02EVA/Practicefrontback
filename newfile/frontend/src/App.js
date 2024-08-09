import logo from './home.svg';
import './App.css';
import Component from './Component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>¡hola!</code> ¿Cómo estás?
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ¡Bienvenido!
        </a>
        <Component/>
      </header>
    </div>
  );
}

export default App;
