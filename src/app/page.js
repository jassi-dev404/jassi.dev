'use client'
import styles from './page.module.scss'
import { useState } from 'react';
import { motion } from 'framer-motion';
import useMousePosition from './utils/useMousePosition';
import LogoLoop from './LogoLoop';
import logo1 from './logos/1.png';
import logo2 from './logos/2.png';
import logo3 from './logos/3.png';
import logo4 from './logos/4.webp';
import logo5 from './logos/5.png';
import logo6 from './logos/6.png';
import logo7 from './logos/7.png';
import logo8 from './logos/8.png';
import logo9 from './logos/9.png';

const toolLogos = [
  { src: logo1.src, title: "HTML", href: "https://en.wikipedia.org/wiki/HTML", style: { height: "96px", width: "auto" } },
  { src: logo2.src, title: "CSS", href: "https://en.wikipedia.org/wiki/CSS", style: { height: "96px", width: "auto" } },
  { src: logo3.src, title: "JS", href: "https://en.wikipedia.org/wiki/JavaScript", style: { height: "96px", width: "auto" } },
  { src: logo4.src, title: "React", href: "https://react.dev/", style: { height: "96px", width: "auto" } },
  { src: logo5.src, title: "Tailwind", href: "https://tailwindcss.com/", style: { height: "96px", width: "auto" } },
  { src: logo6.src, title: "VSC", href: "https://code.visualstudio.com/", style: { height: "96px", width: "auto" } },
  { src: logo7.src, title: "Github", href: "https://github.com/", style: { height: "96px", width: "auto" } },
  { src: logo9.src, title: "Electron", href: "https://electronjs.org/", style: { height: "96px", width: "auto" } },
];

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main className={styles.main}>
      <p className={styles.desktopDisclaimer}>best viewed on desktop</p>
      <motion.div
        className={styles.mask}
        animate={{
          WebkitMaskPosition: `${x - (size / 2)}px ${y - (size / 2)}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p onMouseEnter={() => { setIsHovered(true) }} onMouseLeave={() => { setIsHovered(false) }}>
          Hi, I am Jaskaran <br></br> <span className={styles.large}>I MAKE <br></br>COOL STUFF</span> <br></br> check out some of my work
        </p>
      </motion.div>

      <div className={styles.body}>
        <p>Hi, I am <span className={styles.blue}>Jaskaran</span> <br></br> <span className={styles.large}>I MAKE <br></br><span className={styles.blue}>COOL STUFF</span></span><br></br> check out some of my <span className={styles.blue}>work</span></p>
        <div className={styles.projectCard} onClick={() => window.open("https://github.com/jassi-dev404/blades.js")}>
          <span className={styles.cardTitle}>jassi's mono</span>
          <span className={styles.cardSubtitle}>blades.js</span>
        </div>
        <p className={styles.wow}>some <span className={styles.blue}>tools</span> which i use</p>
        <div className={styles.logoLoopContainer}>
          <LogoLoop
            logos={toolLogos}
            speed={70}
            direction="left"
            logoHeight={80}
            gap={120}
            hoverSpeed={200}
            scaleOnHover
            ariaLabel="Tools I use"
          />
        </div>
        <a href="mailto:jassi.dev@icloud.com" className={styles.mailLink}>Contact Me! <br></br> Mail: jassi.dev@icloud.com</a>
        </div>


    </main>
  )
}
