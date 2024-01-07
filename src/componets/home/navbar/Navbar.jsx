import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full px-12 py-5 flex justify-between items-center z-40">
      <Logo />
      <Menu />
    </nav>
  );
};

export default Navbar;
