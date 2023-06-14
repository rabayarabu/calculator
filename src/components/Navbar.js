import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar">
    <div className="container2">
      <div className="logotitle">Math Magicians</div>
      <ul className="menus">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>|</li>

        <li>
          <NavLink to="/calculator">Calculator</NavLink>
        </li>
        <li>|</li>

        <li>
          <NavLink to="/quotes">Quote</NavLink>
        </li>
      </ul>
    </div>
  </div>
);

export default Navbar;
