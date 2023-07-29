interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({children}) => {
  return (
    <div className="min-h-screen">
      <div>Navbar</div>
      <div>{children}</div>
      <div>footer</div>
    </div>
  );
};

export default Layout;
