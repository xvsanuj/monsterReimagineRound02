import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function getCurrentFrame(index) {
  return `https://raw.githubusercontent.com/xvsanuj/XiaomiReimagined/main/src/assets/Canvas/mi_${String(index).padStart(3, '0')}.webp`;
}

const ImageCanvas = ({ scrollHeight, numFrames }) => {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [frameIndex, setFrameIndex] = useState(0);
  const [canvasSize, setCanvasSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Preload images
  function preloadImages() {
    const imgs = [];
    for (let i = 1; i <= numFrames; i++) {
      const img = new Image();
      const imgSrc = getCurrentFrame(i);
      img.src = imgSrc;
      img.onload = () => {
        console.log(`Image ${i} loaded`);
      };
      img.onerror = () => {
        console.error(`Error loading image ${i}`);
      };
      imgs.push(img);
    }
    setImages(imgs);
  }

  // Set up canvas
  const renderCanvas = () => {
    const context = canvasRef.current.getContext("2d");
    context.canvas.width = canvasSize.width;
    context.canvas.height = canvasSize.height;
  };

  useEffect(() => {
    preloadImages();
    renderCanvas();

    gsap.to({}, {
      scrollTrigger: {
        trigger: canvasRef.current,
        start: 'top top',
        end: `+=${scrollHeight}`,  // Pin the canvas for the entire scrollHeight
        scrub: 0.5,
        pin: true,
        onUpdate: self => {
          const scrollFraction = self.progress;
          const index = Math.min(
            numFrames - 1,
            Math.ceil(scrollFraction * numFrames)
          );
          setFrameIndex(index);
        }
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current || images.length < 1) {
      return;
    }
    const context = canvasRef.current.getContext("2d");
    let requestId;

    // Ensure images cover the entire canvas
    const render = () => {
      context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      const img = images[frameIndex];
      const hRatio = canvasRef.current.width / img.width;
      const vRatio = canvasRef.current.height / img.height;
      const ratio = Math.max(hRatio, vRatio);
      const centerShift_x = (canvasRef.current.width - img.width * ratio) / 2;
      const centerShift_y = (canvasRef.current.height - img.height * ratio) / 2;
      context.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
      requestId = requestAnimationFrame(render);
    };
    render();

    return () => cancelAnimationFrame(requestId);
  }, [frameIndex, images]);

  useEffect(() => {
    const handleResize = () => {
      setCanvasSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ height: scrollHeight }}>
      <canvas ref={canvasRef} style={{ width: '100vw', height: '100vh' }} />
    </div>
  );
};

function Canvas() {
  return (
    <div className="h-fit relative w-full">
      <ImageCanvas scrollHeight={35000} numFrames={325} />
    </div>
  );
}

export default Canvas;