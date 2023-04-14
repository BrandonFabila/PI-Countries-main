import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Landing, Home, Detail, Activity } from './views';

function App() {
  return (
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Landing />} />
          <Route exact path='/home' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route exact path='/create' element={<Activity />} />
        </Routes>
      </div>
   
  );
}

export default App;
