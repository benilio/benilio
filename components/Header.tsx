import styles from "@/styles/modules/header.module.scss";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">beniy.</Link>
            </div>
            <nav className={styles.navigation}>
                <ul className={styles.navigation__buttons}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
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
            </nav>
        </header>
    );
};

export default Header;
