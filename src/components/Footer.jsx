export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        {/* Logo */}
        <a className="footer-logo-wrapper" href="#">
          <img className="footer-logo" src="./logo.png" alt="Logo" />
        </a>

        {/* Navbar */}
        <nav className="footer-links">
          <a className="footer-link" href="#">Xizmatlar</a>
          <a className="footer-link" href="#">Dorilar</a>
          <a className="footer-link" href="#">Asal</a>
          <a className="footer-link" href="#">Kontaktlar</a>
          <a className="footer-link" href="#">Blog</a>
        </nav>
      </div>
    </footer>
  );
}
