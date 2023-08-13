import Navbar from "../Navbar";
import Footer from "../Footer";
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-Ysabeau container mx-auto">
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </div>
  );
};

export default Layout;
