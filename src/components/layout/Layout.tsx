import Navbar from "../Navbar";
interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-Ysabeau">
      <Navbar />
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
