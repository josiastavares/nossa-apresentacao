import { Outlet } from 'react-router-dom';
import './App.css';
import Menu from './componentes/menu';



function App() {
  return (

    <div className="App">
      <Menu />
      <Outlet/>
    </div>
  );
}

export default App;
