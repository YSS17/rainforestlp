import './App.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/sidebar';

function App() {
  return (
    <Router>
      <Sidebar/>
      <Navbar/>
    </Router>
  );
}

export default App;
