import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './modules/Landing'

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Landing/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
