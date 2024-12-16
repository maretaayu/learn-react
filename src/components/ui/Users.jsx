import { Link, Outlet } from "react-router-dom";
function Users() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/users/levi">Levi</Link>
        </li>
        <li>
          <Link to="/users/mareta">Mareta</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export { Users };
