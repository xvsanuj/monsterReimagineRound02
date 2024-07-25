import { easeOut, motion, MotionConfig } from 'framer-motion'
import { useState } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Loader = () => {
    const [btnClick, setBtnClick] = useState(false)
    const btnClicked = () => {
        setBtnClick(!btnClick);
    }
    const t1 = gsap.timeline();
    useGSAP(() => {
        t1.from(".loader-text .loading ", {
            y: "-100vh",
            opacity: 0,
            duration: 1,
            stagger: 0.5,
            ease: 'back.inOut',
        })
        t1.to(".circle", {
            strokeDashoffset: -380,
            duration: 2.3,
            ease: 'back.inOut',
        }, "p");
        t1.to(
            '.loader-prog h1',
            {
                opacity: 1,
                duration: 2,
                ease: 'easeInOut',
                onStart: () => {
                    let percent = 0;
                    const interval = setInterval(() => {
                        percent += 10;
                        document.querySelector('.loader-prog h1').textContent = `${percent}%`;
                        if (percent === 100) clearInterval(interval);
                    }, 100);
                },
            },
            'p'
        );

        t1.to('.loader-prog h1',
            {
                opacity: 0,
                duration: .1,
                ease: 'easeInOut',
            },
        );

        t1.from('button',
            {
                opacity: 0,
                y: 30,
                duration: 1,
                ease: 'easeInOut',
            },
        );

    });
    return (
        <>
            <MotionConfig
                transition={{ duration: 1.2, ease: 'anticipate' }}
            >
                <motion.div
                    animate={btnClick ? "open" : "closed"}
                    variants={{
                        open: {
                            clipPath: "inset(0 0 100% 0)"
                        },
                        closed: {
                            clipPath: "inset(0 0 0 0)",
                            transform: { ease: easeOut}
                        }
                    }}
                    className="w-full h-screen bg-[#111] fixed bottom-0 left-[50%] -translate-x-[50%] z-50">
                    <div className="relative flex w-full h-full max-w-screen-xl mx-auto text-center">
                        <MotionConfig>
                            <div className="w-[50vw] h-[70vh] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                <div className="loader-container w-full h-full flex items-center flex-col gap-10 justify-center">
                                    <div className="loading relative">
                                        <svg width="225" height="225" viewBox="0 0 124 124">
                                            <circle
                                                style={{ rotate: "-90deg", transformOrigin: "center", strokeDasharray: "380", strokeDashoffset: "380" }}
                                                className="circle" cx="62" cy="62" r="59" fill="none" stroke="#ffff" strokeWidth="1px" stroke-linecap="round" />
                                        </svg>
                                        <div className="loader-prog absolute top-[10%] left-[50%] -translate-x-[50%] -translate-y-[10%]">
                                            <h1 className='text-white text-[1vw] opacity-0'>0%</h1>
                                        </div>
                                        <div className="loader-text absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[10%]">
                                            <div className="loading vido size-16 rounded-[24%] ">
                                                {/* <video className='' src=""></video> */}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        onClick={btnClicked}
                                        className="px-10 hover:duration-200 hover:transition-all py-2 uppercase text-sm tracking-widest bg-white hover:border-[1px] hover:border-white hover:bg-[#333] hover:text-white text-black flex flex-col items-center overflow-hidden rounded-full">
                                        Start
                                    </button>
                                </div>
                            </div>

                        </MotionConfig>
                    </div>
                </motion.div>
            </MotionConfig>
        </>
    )
}

export default Loader