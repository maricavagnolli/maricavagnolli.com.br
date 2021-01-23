import * as React from "react";
import Appbar from "../Appbar";
import Footer from "../Footer";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Appbar />
      <div style={{ minHeight: "calc(100vh - 168px)" }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
