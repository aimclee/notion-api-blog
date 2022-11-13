import React, {PropsWithChildren} from 'react'
import Header from './Header';

const Layout = ({children}:PropsWithChildren) => {
  return (
    <div>
        <Header/>
        <main>{children}</main>
    </div>
  );
};

export default Layout;