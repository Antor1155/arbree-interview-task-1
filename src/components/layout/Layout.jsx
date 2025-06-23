import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pt-20 px-4">{children}</main>
    </>
  );
};

export default Layout;
