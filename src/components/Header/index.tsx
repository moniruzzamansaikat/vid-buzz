import Logo from '../Logo';
import MainMenu from '../MainMenu';
import '../../styles/Header.scss';

function Header() {
  return (
    <div className="header">
      <Logo />
      <MainMenu />
    </div>
  );
}

export default Header;
