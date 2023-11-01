import './css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import ResultPage from './pages/ResultPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<CalculatorPage />}>
                <Route index element={<HomePage />} />
                <Route path='/result' element={<ResultPage />} />
              </Route>
            </Routes>        
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
