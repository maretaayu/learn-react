import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div>
      <Link to="/user/levi"> Levi </Link>
      <Link to="/user/mareta"> Mareta </Link>

      <Outlet />
    </div>
  );
}

export { User };
