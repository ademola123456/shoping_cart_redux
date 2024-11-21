// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
import Header from "./header";
import CartTab from "./cartTab"
import { Outlet } from "react-router";
function Layout() {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartTab />
    </div>
  );
}

export default Layout;
