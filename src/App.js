// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Header from './components/Header';
import Calculator from './components/Calculator' 


function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <div>
          <Calculator></Calculator>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
}

export default App;
