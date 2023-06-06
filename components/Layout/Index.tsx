import { FC } from 'react';
import { Footer, Meta, Navbar } from "./../../components";
type Props = {
  children?: React.ReactNode
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div>
      <Meta />
      <Navbar />
      <main>{children}</main>
       <Footer />
    </div>
  );
}

export default Layout;
