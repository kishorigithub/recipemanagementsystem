import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa'; 
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
      <img className="logo" src=".\logo.png" alt="logo.png"></img>
      </div>
      <div className="menu">
        <ul>
          <li>HOME </li>
          <li>ABOUT</li>
          <li>RECIPES </li>
          <li>START HERE</li>
          <li>
          
        </li>
        </ul>

      </div>
      
      
    </div>
  );
};
export default Header;
