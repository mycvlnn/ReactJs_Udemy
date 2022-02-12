import { NavLink, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <NavLink
        className={(nav) => (nav.isActive ? "hidden" : "")}
        to="new-user"
      >
        New User
      </NavLink>
      <Outlet />
    </section>
  );
};

export default Welcome;
