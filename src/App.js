import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Views from './views/Views';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Views />
      </BrowserRouter>
      </div>
  );
}

export default App;
