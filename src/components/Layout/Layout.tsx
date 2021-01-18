import * as React from "react";
import Appbar from "../Appbar";

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Appbar />
      {children}
    </div>
  );
};

export default Layout;
