'use client'
import LogoLoop from '../LogoLoop';
import logo1 from '../logos/1.png';
import logo2 from '../logos/2.png';
import logo3 from '../logos/3.png';
import logo4 from '../logos/4.webp';
import logo5 from '../logos/5.png';
import logo6 from '../logos/6.png';
import logo7 from '../logos/7.png';
import logo8 from '../logos/8.png';
import logo9 from '../logos/9.png';

const toolLogos = [
  { src: logo1.src, title: "HTML", href: "https://en.wikipedia.org/wiki/HTML", style: { height: "96px", width: "auto" } },
  { src: logo2.src, title: "CSS", href: "https://en.wikipedia.org/wiki/CSS", style: { height: "96px", width: "auto" } },
  { src: logo3.src, title: "JS", href: "https://en.wikipedia.org/wiki/JavaScript", style: { height: "96px", width: "auto" } },
  { src: logo4.src, title: "React", href: "https://react.dev/", style: { height: "96px", width: "auto" } },
  { src: logo5.src, title: "Tailwind", href: "https://tailwindcss.com/", style: { height: "96px", width: "auto" } },
  { src: logo6.src, title: "VSC", href: "https://code.visualstudio.com/", style: { height: "96px", width: "auto" } },
  { src: logo7.src, title: "Github", href: "https://github.com/", style: { height: "96px", width: "auto" } },
  { src: logo8.src, title: "Qwen-Code", href: "https://github.com/QwenLM/qwen-code", style: { height: "96px", width: "auto" } },
  { src: logo9.src, title: "Electron", href: "https://electronjs.org/", style: { height: "96px", width: "auto" } },
];

export default function Mobile() {
  return (
    <main className="min-h-screen bg-[#0f0f0f]">
      <p className="w-full text-[#afa18f] text-2xl text-center pt-20 px-4 m-0 leading-[1.1]">
        Hi, I am <span className="text-[#a8cfdb]">Jaskaran</span> <br /> <br></br>
       <span className='text-8xl'> I MAKE <br />
        <span className="text-[#a8cfdb]">WEBSITES</span></span>
      </p>

      <p className="w-full text-[#afa18f] text-xl text-center mt-6 px-4 m-0">
        check out some of my <span className="text-[#a8cfdb]">work</span>
      </p>

      <div
        className="mt-4 ml-14 mx-2 px-2 py-2 bg-white rounded-full max-w-sm text-center"
        onClick={() => window.open("https://github.com/jassi-dev404/blades.js")}
      >
        <p className="text-black text-base font-mono m-0">jassi's mono</p>
        <p className="text-black text-2xl font-mono m-0">blades.js</p>
      </div>

      <p className="w-full text-[#afa18f] text-xl text-center mt-10 px-4 m-0">
        some <span className="text-[#a8cfdb]">tools</span> which i use
      </p>

      <div className="w-full mt-16 bg-white py-[0.05rem]">
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

      <p className="w-full text-[#afa18f] text-base text-center mt-8 px-4 m-0">
        Contact Me! <br /> Mail: <a href="mailto:jassi.dev@icloud.com" className="text-[#a8cfdb] no-underline">jassi.dev@icloud.com</a>
      </p>
    </main>
  );
}
