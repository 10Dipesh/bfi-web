import Navbar from "../Navbar";
import Footer from "../Footer";
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="mt-10">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
