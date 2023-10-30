import './css/App.css';
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
      </div>
    </div>
  );
}

export default App;
