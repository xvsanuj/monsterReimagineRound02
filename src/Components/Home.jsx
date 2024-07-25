import React, { useEffect, useState } from "react";
import gsap from "gsap";

const Home = () => {
  const mainImages = [
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/4.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/11.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/13.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/6.jpg",
  ];
  const sideImages = [
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/2.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/8.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/1.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/9.jpg",
  ];
  const sideImagesOne = [
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/3.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/12.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/7.jpg",
    "https://raw.githubusercontent.com/xvsanuj/MonsterReimagineRound2/main/src/assets/Images/Home/10.jpg",
  ];
  const textOptions = [
    ["every shot iconic", "glossy shots", "supportive ui", "no1 brand"],
    ["dynamic display", "sleek design", "powerful performance", "stunning visuals"],
    ["advanced tech", "user-friendly", "innovative features", "top quality"],
    ["fast charging", "high resolution", "long battery life", "compact build"]
  ];
  const taglineOptions = [
    "India's No.1 Smartphone Brand",
    "Leading the Tech Revolution",
    "Innovation Meets Excellence",
    "Quality That Speaks"
  ];
  const [currentHeadImage, setCurrentHeadImage] = useState(0);
  const [currentSideImage, setCurrentSideImage] = useState(0);
  const [currentSideImageOne, setCurrentSideImageOne] = useState(0);
  const [zoomClass, setZoomClass] = useState(false);
  const [zoomClassSide, setZoomClassSide] = useState(false);
  const [zoomClassSideOne, setZoomClassSideOne] = useState(false);

  useEffect(() => {
    const animateText = () => {
      const h1s = document.querySelectorAll(".teleTexts h1");
      gsap.fromTo(h1s, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
      );
    };
    const animateTagline = () => {
      const tagline = document.querySelector(".tagline");
      gsap.fromTo(tagline, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.5 }
      );
    };
    const mainInterval = setInterval(() => {
      setZoomClass(true);
      setTimeout(() => {
        setCurrentHeadImage((prevImage) => (prevImage + 1) % mainImages.length);
        setZoomClass(false);
        animateText();
        animateTagline();
      }, 1500);
    }, 5000);
    const sideInterval = setInterval(() => {
      setZoomClassSide(true);
      setTimeout(() => {
        setCurrentSideImage((prevImage) => (prevImage + 1) % sideImages.length);
        setZoomClassSide(false);
      }, 1500);
    }, 5000);
    const sideIntervalOne = setInterval(() => {
      setZoomClassSideOne(true);
      setTimeout(() => {
        setCurrentSideImageOne((prevImage) => (prevImage + 1) % sideImagesOne.length);
        setZoomClassSideOne(false);
      }, 1500);
    }, 5000);
    return () => {
      clearInterval(mainInterval);
      clearInterval(sideInterval);
      clearInterval(sideIntervalOne);
    };
  }, []);
  
  useEffect(() => {
    gsap.fromTo(".teleTexts h1", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 1, stagger: 0.1 }
    );
    gsap.fromTo(".tagline", 
      { y: 10, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, stagger: .1 }
    );
  }, [currentHeadImage]);

  return (
    <div className='lg:h-[90vh] relative w-full'>
      <div className='flex flex-col lg:flex-row gap-[1%] h-full'>
        <div className='h-full w-full lg:w-[59.5%] flex flex-col lg:flex-row'>
          <div className='w-full lg:w-1/2 h-full'>
            <div className='h-1/2 hidden lg:flex border-b-[1px] border-zinc-800 w-full flex-col items-center justify-center'>
              <h1 className='text-4xl sm:text-4xl lg:text-6xl font-black'>Xiaomi</h1>
              <p className={`tagline text-sm transition-transform duration-[2.5s] ease-out ${zoomClass ? 'scale-110' : ''}`}>{taglineOptions[currentHeadImage]}</p>
            </div>
            <div className='h-1/2 hidden lg:flex border-b-[1px] border-zinc-800 w-full px-5 sm:px-10 lg:px-20 justify-center flex-col gap-6'>
              <p className='leading-none text-center sm:text-left'>Get Attractive Offers For Your First Purchase.</p>
              <button className='px-6 py-2 mb-5 rounded-md bg-zinc-200 text-black hover:border-[1px] hover:border-white hover:bg-[#111] hover:text-white transition-all duration-200'>Explore Now</button>
            </div>
          </div>
          <div className='relative overflow-hidden w-full lg:w-1/2 h-full border-x-[1px] border-zinc-800'>
            <img className={`h-[80vh] lg:h-full w-full object-cover transition-transform duration-[2.5s] ease-out ${zoomClass ? 'scale-110' : ''}`} src={mainImages[currentHeadImage]} alt="" />
            <div className='absolute bg-[#55504c] bottom-5 left-5 h-28 w-68 lg:w-72 sm:block rounded-md overflow-hidden'>
              <div className="teleTexts h-10 flex items-center w-full bg-[#55504c] flex-col overflow-hidden">
                <h1 className='font-normal w-0 ml-4 mt-1 lg:ml-0 whitespace-nowrap mr-60 uppercase text-xl lg:text-2xl tracking-tighter pt-3'>{textOptions[currentHeadImage][0]}</h1>
                <h1 className='font-normal w-0 ml-4 mt-1 lg:ml-0 whitespace-nowrap mr-60 uppercase text-xl lg:text-2xl tracking-tighter pt-3'>{textOptions[currentHeadImage][1]}</h1>
                <h1 className='font-normal w-0 ml-4 mt-1 lg:ml-0 whitespace-nowrap mr-60 uppercase text-xl lg:text-2xl tracking-tighter pt-3'>{textOptions[currentHeadImage][2]}</h1>
                <h1 className='font-normal w-0 ml-4 mt-1 lg:ml-0 whitespace-nowrap mr-60 uppercase text-xl lg:text-2xl tracking-tighter pt-3'>{textOptions[currentHeadImage][3]}</h1>
              </div>
              <span className='h-[1px] w-[90%] lg:w-[80%] bg-zinc-200 inline-block lg:mx-5 mx-3'></span>
              <div className='flex items-center bg-[#55504c] lg:px-5 px-2 justify-between lg:my-0 my-2'>
                <h1 className='bg-[#55504c] leading-8 ml-3 lg:ml-0'>Quick View</h1>
                <button className='bg-[#55504c] px-6 py-1 border-[1px] rounded-full mr-4 hover:bg-white hover:text-black transition-all duration-200'>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className='h-full flex w-full lg:w-[39.5%] border-x-[1px] border-zinc-800 flex-col lg:flex-row'>
          <div className='w-full lg:w-[80%] h-full flex flex-col gap-[3%] border-r-[1px] border-zinc-800'>
            <div className='h-[59%] hidden lg:block w-full border-b-[1px] overflow-hidden border-zinc-800'>
              <img className={`h-full w-full object-cover transition-transform duration-[2.5s] ease-out ${zoomClassSide ? 'scale-110' : ''}`} src={sideImages[currentSideImage]} alt="" />
            </div>
            <div className='h-[38%] hidden lg:block w-full border-y-[1px] overflow-hidden border-zinc-800'>
              <img className={`h-full w-full object-cover object-top transition-transform duration-[2.5s] ease-out ${zoomClassSideOne ? 'scale-110' : ''}`} src={sideImagesOne[currentSideImageOne]} alt="" />
            </div>
          </div>
          <div className='hidden h-full lg:flex items-center justify-between py-10 lg:py-20 flex-col w-full lg:w-[20%]'>
            <h1 className='-rotate-90 origin-left whitespace-nowrap mt-12 lg:mt-36 lg:ml-48 font-semibold text-xs sm:text-sm lg:text-base'>Scroll Down To Next Page</h1>
            <h1 className='-rotate-90 text-base sm:text-xl lg:text-2xl font-black whitespace-nowrap origin-left tracking-tighter lg:ml-16'>PAGE 1</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;