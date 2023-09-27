import styles from "@styles/modules/footer.module.scss";

import {FaBehance, FaCode, FaGithub, FaInstagram, FaLinkedinIn} from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <section className={styles.links}>
                <ul className={styles.links__sitemap}>
                    {/*<li>*/}
                    {/*  <Link href="/">Home</Link>*/}
                    {/*</li>*/}
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/work">Work</Link>
                    </li>
                    <li>
                        <Link href="mailto:benilio129@gmail.com?Subject=👋 Hey, there!">Contact</Link>
                    </li>
                    <li>
                        <a
                            href="/BenicioOliveira_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            // download='BenicioOliveira_Resume'
                        >
                            Resume
                        </a>
                    </li>
                </ul>
                <ul className={styles.links__social}>
                    <li>
                        <a href="https://br.linkedin.com/in/ben%C3%ADcio-oliveira-458158135">
                            <FaLinkedinIn/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.behance.net/benilio">
                            <FaBehance/>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/beniliov/">
                            <FaInstagram/>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/benilio">
                            <FaGithub/>
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a href="https://codepen.io/beniliov">*/}
                    {/*        <FaCodepen/>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    <li>
                        <a href="https://www.frontendmentor.io/profile/benilio">
                            <FaCode/>
                        </a>
                    </li>
                </ul>
            </section>
            {/*<section>*/}
            {/*  /!*<h4>Jukebox</h4>*!/*/}
            {/*  <div className={styles.jukebox}>*/}
            {/*    <Image className={styles.cover} src={Cover} alt="cover" />*/}
            {/*    <div className={styles.details}>*/}
            {/*      <p className={styles.details__title}>Alcohol-Free</p>*/}
            {/*      <p className={styles.details__artist}>TWICE (트와이스)</p>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</section>*/}
        </footer>
    );
};

export default Footer;
