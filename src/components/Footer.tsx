import {
  FaInstagram,
  FaBehance,
  FaLinkedin,
  FaGithub,
  FaCodepen,
} from "react-icons/fa";
import { HiMusicalNote, HiHeart } from "react-icons/hi2";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__signature">
        Built with <HiHeart title="love" className="text-accent" /> and{" "}
        <HiMusicalNote title="music" />
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.instagram.com/beniliov/">
              <FaInstagram title="Instagram" />
              {/* Instagram */}
            </a>
          </li>
          <li>
            <a href="https://www.behance.net/benilio">
              <FaBehance title="Behance" />
              {/* Behance */}
            </a>
          </li>
          <li>
            <a href="https://github.com/benilio">
              <FaGithub title="Github" />
              {/* Github */}
            </a>
          </li>
          <li>
            <a href="https://codepen.io/beniliov">
              <FaCodepen title="CodePen" />
              {/* CodePen */}
            </a>
          </li>

          <li>
            <a href="https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135">
              <FaLinkedin title="LinkedIn" />
              {/* LinkedIn */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
