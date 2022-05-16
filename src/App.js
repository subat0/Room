import './App.css';
import Brands from './components/brands/brands';
import Design from './components/design/design';
import Header from './components/header/header.jsx';
import Products from './components/products/products';
import Room1 from './components/room1/room1';
import Rooms from './components/rooms/rooms';

function App() {
  return (
    <div>
      <Header/>
      <Room1/>
      <Design/>
      <Rooms/>
      <Brands/>
      <Products/>
    </div>

  );
}

export default App;
