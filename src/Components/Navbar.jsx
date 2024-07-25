import gsap from "gsap";
import { useRef, useState, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState("vertical");
  const [isAnimating, setIsAnimating] = useState(false);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const navFirstRef = useRef(null);
  const navSecondRef = useRef(null);
  const h2sRef = useRef(null);
  useEffect(() => {
    h2sRef.current = document.querySelectorAll(".navLinks a");
  }, []);
  const handleNavClick = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setNav((prev) => (prev === "rotated" ? "vertical" : "rotated"));
    const tl = gsap.timeline({
      onComplete: () => setIsAnimating(false),
    });
    if (nav !== "rotated") {
      tl.to(firstRef.current, { top: 0, ease: "expo.inOut", duration: 1 })
        .to(secondRef.current, { delay: -0.8, top: 0, ease: "expo.inOut", duration: 1 })
        .from(h2sRef.current, { y: 100, duration: 1, stagger: 0.05 }, "k");
      gsap.to(navFirstRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navFirstRef.current, { bottom: 15, margin: 0, rotate: -45 });
          tl.to(navFirstRef.current, { width: "100%", delay: -0.5 }, "k");
        },
      });
      gsap.to(navSecondRef.current, {
        backgroundColor: "white",
        width: 0,
        onComplete: () => {
          gsap.set(navSecondRef.current, { top: 15, margin: 0, rotate: 45 });
          tl.to(navSecondRef.current, { width: "100%", delay: -0.3 }, "k");
        },
      });
      gsap.from(".animation span", {
        y: 100,
        stagger: 0.1,
        duration: 2,
        ease: "power4.inOut",
      });
    } else {
      tl.to(secondRef.current, { top: "-100vh", ease: "expo.inOut", duration: 1 })
        .to(firstRef.current, { delay: -0.8, top: "-100vh", ease: "expo.inOut", duration: 1 });
      gsap.to(navFirstRef.current, { width: "0", backgroundColor: "#fff" });
      gsap.to(navSecondRef.current, { width: "0", backgroundColor: "#fff" });
      tl.set(navFirstRef.current, { rotate: 0, marginBottom: 6 })
        .set(navSecondRef.current, { rotate: 0, marginTop: 6 })
        .to(navFirstRef.current, { width: "100%", duration: 0.4 })
        .to(navSecondRef.current, { width: "100%", duration: 0.4 });
    }
  };
  const navLinks = ["Store", "Phones", "Tablets", "TV & Smart Home", "Smart Watch & Audio"];
  const navli = ["Stores", "Phones", "Tabletes", "TV & Smartphones", "Smart Watch & Audio", "Discover", "Support"];
  return (
    <div className="h-[8vh] lg:h-[10vh] justify-between flex items-center px-5 lg:px-20 w-full border-b-[1px] border-zinc-800 z-50">
      <div ref={firstRef} className="h-screen w-full fixed bg-orange-600 z-40 left-0 -top-[100vh]"></div>
      <div ref={secondRef} className="h-screen w-full fixed bg-black z-40 left-0 -top-[100vh] flex">
        <div className="bg-black">
          <div className="bg-black lg:mt-32 mt-24 navLinks">
            {navli.map((item, index) => (
              <div key={index} className="bg-black overflow-hidden lg:h-[9.5vh] w-fit">
                <a href="#" className="w-fit bg-black whitespace-nowrap mx-16 lg:mx-40 text-2xl lg:text-[3vw] my-5 font-semibold tracking-tighter cursor-pointer link">{item}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-black">
          <div className="bg-black flex gap-4 absolute top-[70vh] lg:top-[6vw] z-50 lg:right-24 right-20">
            <span className="p-4 rounded-full"><FaFacebookF /></span>
            <span className="p-4 rounded-full"><FaInstagram /></span>
            <span className="p-4 rounded-full"><FaLinkedinIn /></span>
            <span className="p-4 rounded-full"><RiTwitterXLine /></span>
          </div>
          <img className="-rotate-90 hidden lg:block bg-black h-[100vh] absolute top-3 right-20 object-cover" src="https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Navbar/1.webp" alt="" />
        </div>
      </div>
      <div className="lg:w-[25%] flex items-center lg:gap-4 gap-2">
        <h1 className="text-2xl tracking-wide lg:text-3xl font-semibold lg:tracking-tight">Xiaomi</h1>
        <span className="h-6 lg:h-8 w-[3px] inline-block bg-zinc-800 rounded-full"></span>
        <p className="text-[8px] lg:text-xs font-thin lg:font-semibold leading-none">India's No1 <br /> Smartphone Brand</p>
      </div>
      <div className="hidden w-[50%] lg:flex justify-center gap-6">
        {navLinks.map((link, index) => (
          <h1 key={index} className="cursor-pointer text-sm link w-fit">{link}</h1>
        ))}
      </div>
      <div className="w-[25%] flex items-center gap-8 justify-end">
        <div className="fixed h-[14vw] lg:h-[3vw] w-[35vw] lg:w-[10vw] rounded-xl flex items-center justify-between pl-3 lg:pl-[1.2vw] z-50">
          <span className="text-2xl fixed z-50 cursor-pointer ml-2"><CiSearch /></span>
          <div onClick={handleNavClick} className="navMenu h-8 w-10 flex items-center justify-center cursor-pointer fixed z-40 left-[78%] lg:left-[90%]">
            <h1 ref={navFirstRef} className="h-[2px] w-10 monument bg-white rounded-full inline-block absolute bottom-2 right-0"></h1>
            <h1 ref={navSecondRef} className="h-[2px] w-10 monument bg-white rounded-full inline-block absolute top-2 left-0"></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
