"use client";
import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.webp";
import cylinderImage from "@/assets/cylinder.webp";
import noodleImage from "@/assets/noodle.webp";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={heroRef}
      className="pt-8 pb-20 md:pt-5 md:pb-10 overflow-x-clip"
      style={{ background: "radial-gradient(ellipse 200% 100% at bottom left, #343a40, #000000 100%)" }}
    >
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <h1 className="text-5xl pb-3 md:text-7xl min-h-fit font-bold tracking-tighter bg-gradient-to-b from-white to-[#6b6b6b] text-transparent bg-clip-text mt-6 mb-6 ">
              Transform Your SaaS to 
                AgenticSaaS
            </h1>
            <div className="mt-6 gap-0">
            <p className=" text-xl  text-white tracking-tight mt-6">
              Is your SaaS platform ready for the next evolution?
            </p>
            <p className="text-xxl text-[#8b8b8b] tracking-tight ">
               We specialize in transforming traditional SaaS into Agentic SaaS, embedding AI agents to create smarter, more autonomous, and user-centric experiences.
            </p>
            </div>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="tel:+919994566311">
                <button className="btn btn-primary">Drop Us a Line</button>
              </a>
              <a href="https://drive.google.com/file/d/1dOfrYDb0li2BaVQzWtnTxsIruJDB-Ejr" download="aXtrLabServices.pdf">              <button className="btn btn-text flex gap-1">
                <span>Learn more</span>
                {/* <ArrowIcon classname="h-2 w-2" /> */}
              </button></a>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img
              src={cogImage.src}
              alt="Cog"
              className="md:absolute md:h-full md:w-auto md:max-w-none md:-left-6 lg:left-0"
              animate={{
                translateY: [-30, 30],
              }}
              transition={{
                repeat: Infinity,
                repeatType: "mirror",
                duration: 3,
                ease: "easeInOut",
              }}
            />
                        <motion.img
              src={cylinderImage.src}
              width={220}
              height={220}
              alt="Cylinder image"
              className="hidden md:block -left-32 md:absolute "
              style={{
                translateY: translateY,
              }}
            />
            <motion.img
              src={noodleImage.src}
              width={220}
              alt="Noodle image"
              className="hidden lg:block top-[524px] left-[448px] absolute rotate-[30deg]"
              style={{
                rotate: 30,
                translateY: translateY,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
