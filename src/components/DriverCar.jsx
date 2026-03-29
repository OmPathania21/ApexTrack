"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const defaultCar = "/Alex%20Albon%203.png";

export const DriverCar = ({
  imageSrc = defaultCar,
  title = "Williams FW Car",
  subtitle = "Precision. Speed. Control.",
}) => {
  const imgRef = useRef(null);

  useEffect(() => {
    if (!imgRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imgRef.current,
        { scale: 1.02, filter: "blur(4px)" },
        {
          scale: 1.07,
          filter: "blur(0px)",
          ease: "power1.out",
          scrollTrigger: {
            trigger: imgRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        }
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative mt-12 overflow-hidden rounded-3xl">
      <motion.img
        ref={imgRef}
        src={imageSrc}
        alt={title}
        className="h-full w-full object-cover"
        initial={{ opacity: 0, y: 30, scale: 1.02 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0, ease: "easeOut" }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04060c]/90 via-transparent to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-6 text-white sm:px-10 sm:pb-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-100/80">{title}</p>
        <p className="text-2xl font-semibold">{subtitle}</p>
      </div>
    </section>
  );
};
