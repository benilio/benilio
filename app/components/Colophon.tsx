"use client";

import Link from "next/link";
import styles from "@/site/styles.module.css";
import RandomTrack from "@/components/RandomTrack";

const Colophon = () => {
  return (
    <footer id="colophon" className={styles.section_width}>
      <h2 className={styles.section_heading}>Colophon</h2>
      <div className={styles.colophon_container}>
        <div className={styles.colophon_extra}>
          <h3 className={styles.colophon_heading}>Song Pick</h3>
          {/*<p>*/}
          {/*  Built with <CgMusicNote className='inline-block' /> and cats{' '}*/}
          {/*</p>*/}
          <RandomTrack />
        </div>
        <div>
          <h3 className={styles.colophon_heading}>Fonts</h3>
          <ul className="list-none">
            <li>
              <Link
                href="https://fonts.google.com/specimen/Manrope"
                passHref={true}
              >
                Manrope
              </Link>
            </li>
            <li>
              <Link
                href="https://fonts.google.com/specimen/Unbounded"
                passHref={true}
              >
                Unbounded
              </Link>
            </li>
            <li>
              <Link
                href="https://dirtylinestudio.com/product/dirtyline-36daysoftype-2022/"
                passHref={true}
              >
                Dirtyline 36Daysoftype 2022
              </Link>
            </li>
            <li>
              <Link
                href="https://fonts.google.com/specimen/Nanum+Pen+Script"
                passHref={true}
              >
                Nanum Pen Script
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colophon_heading}>Icons</h3>
          <ul className="list-none">
            <li>
              <Link href="https://fontawesome.com/" passHref={true}>
                Font Awesome
              </Link>
            </li>
            <li>
              <Link href="https://css.gg/" passHref={true}>
                css.gg
              </Link>
            </li>
            <li>
              <Link
                href="https://hatscripts.github.io/circle-flags/"
                passHref={true}
              >
                circle-flags
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className={styles.colophon_heading}>Technology</h3>
          <ul className="list-none">
            <li>
              <Link href="https://nextjs.org/" passHref={true}>
                Next.js
              </Link>
            </li>
            <li>
              <Link href="https://tailwindcss.com/" passHref={true}>
                Tailwind CSS
              </Link>
            </li>
            <li>
              <Link href="https://vercel.com/" passHref={true}>
                Vercel
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Colophon;
