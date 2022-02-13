import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useHistory } from "react-router-dom";

export function Navbar({ click }) {
  const history=useHistory();
  return (
    <nav className="navbar">
      <div className="navbar_log">
        <h2 onClick={()=>history.push("/products")}>Amazon Shopping Cart</h2>
      </div>
      <ul className="navbar_links">
        
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Shop</Link>
        </li>
        <li>
          <Link to="/addproduct">Add Product</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        
      </ul>
      <div className="hamburger_menu" onClick={click}>
       <MenuRoundedIcon htmlColor="white"/>
       
      </div>
    </nav>
  );
}
