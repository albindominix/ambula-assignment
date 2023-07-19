import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
      <div>
      <Link style={{ textDecoration: 'none',color:'white' }}to={`1/todo`}><h2>Todo</h2></Link></div> 
      <div>
      <Link style={{ textDecoration: 'none',color:'white'}} to={`2/cart-home`}><h2>Cart</h2></Link>
      </div>
      <div>
      <Link style={{ textDecoration: 'none',color:'white'}} to={`3/`}><h2>Routes</h2></Link>
      </div>
    </div>
  );
}

export default App;
