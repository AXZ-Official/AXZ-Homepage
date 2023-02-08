import { FC, ReactNode } from "react";
import Header from "./header";
import Vars from "../env/vars";
import Footer from "./footer";

const Layout: FC<{
  children: ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div className="wrapper">
      <Header />
      <main id="main" className={className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
