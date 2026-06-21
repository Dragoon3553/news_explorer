import "../blocks/footer.css";

// Image Imports
import github from "../assets/github.png";
import linkedIn from "../assets/linkedin.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear} Supersite, Powered by News API
      </p>
      <div className="footer__menu-container">
        <div className="footer__text-container">
          <p className="footer__text">Home</p>
          <p className="footer__text">TripleTen</p>
        </div>
        <img src={github} alt="GitHub Icon" className="footer__github-img" />
        <img
          src={linkedIn}
          alt="LinkedIn Icon"
          className="footer__linkedin-img"
        />
      </div>
    </footer>
  );
}

export default Footer;
