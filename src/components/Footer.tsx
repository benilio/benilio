import classes from "./Footer.module.css";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div>
        Built with{" "}
        <span role="img" aria-label="green heart">
          💚
        </span>{" "}
        and{" "}
        <span role="img" aria-label="headphones">
          🎧
        </span>
        <span role="img" aria-label="musical notes">
          🎶
        </span>
      </div>
      <div>
        <ul>
          <li>
            <a href="https://www.instagram.com/beniliov/">Instagram</a>
          </li>
          <li>
            <a href="https://www.behance.net/benilio">Behance</a>
          </li>
          <li>
            <a href="https://github.com/benilio">Github</a>
          </li>
          <li>
            <a href="https://codepen.io/beniliov">CodePen</a>
          </li>

          <li>
            <a href="https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
