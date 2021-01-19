import * as React from "react";
import Appbar from "../Appbar";
import Footer from "../Footer";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
