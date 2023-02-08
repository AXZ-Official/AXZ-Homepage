import { FC } from "react";
import Header from "./header";
import Vars from "../env/vars";

const Layout: FC<{
  children;
}> = ({ children }) => {
  return (
    <div className="wrapper">
      <Header></Header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
