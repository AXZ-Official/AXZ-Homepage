import { FC, ReactNode } from "react";
import Header from "./header";
import Vars from "../env/vars";
import Footer from "./footer";
import CustomHead from "./head";

const Layout: FC<{
  children: ReactNode;
  className?: string;
  pageTitle?: string;
}> = ({ children, className, pageTitle }) => {
  return (
    <div className="wrapper">
      <CustomHead pageTitle={pageTitle} />
      <Header />
      <main id="main" className={className}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
