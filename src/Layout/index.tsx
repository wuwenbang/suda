import InternalLayout from './components/Layout';
import Header from './components/Header';
import Sider from './components/Sider';
import Content from './components/Content';
import Footer from './components/Footer';
import './index.less';

type InternalLayoutType = typeof InternalLayout;

interface LayoutType extends InternalLayoutType {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
}

const Layout = InternalLayout as LayoutType;

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;
Layout.Sider = Sider;

export default Layout;
