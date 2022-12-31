import React, { PropsWithChildren } from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren<any>) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;