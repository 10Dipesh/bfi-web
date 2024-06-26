import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
