import './styles/global.css';
import Dashboard from './components/Dashboard/Dashboard.js';
import Top from './components/Dashboard/Top/Top.js'
import Buttons from './components/Dashboard/Buttons/buttons.js';

function App() {
  return (
    <div>
      <Top />
      <Dashboard />
      <Buttons />
    </div>
  );
}

export default App;
