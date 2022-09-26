import { Link, NavLink } from "react-router-dom";


const Home = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/slot">Slot Game</NavLink>
        </li>
        <li>
          <Link to="/digital_time">Digital Time</Link>
        </li>
        <li>
          <Link to="/netflix">NetflixSeries</Link>
        </li>
        <li>
          <Link to="/forms">Forms</Link>
        </li>
        <li>
          <Link to="/jsxall">jsx All</Link>
        </li>
      </ul>
    </>
  );
};
export default Home;
