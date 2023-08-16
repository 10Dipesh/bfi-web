import Navbar from "../Navbar";
import Footer from "../Footer";
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div>{children}</div>
      <Footer/>
    </main>
  );
};

export default Layout;
