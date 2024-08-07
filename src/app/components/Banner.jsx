'use client';
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaGithub,
  FaWhatsapp,
  FaLinkedin,
  FaFileDownload,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 ">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Miguel Amaral",
                1000,
                "Softwere Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="flex gap-3 text-[#ADB7BE]  text-base sm:text-lg mb-6 lg:text-xl ">
            <Link
              href="https://wa.me/5581996379353"
              target="blank"
              className="hover:text-primary-400"
            >
              <FaWhatsapp />
            </Link>

            <Link
              href="https://github.com/miguelamaral254"
              target="blank"
              className="hover:text-primary-400"
            >
              <FaGithub />
            </Link>

            <Link
              href="https://www.linkedin.com/in/miguel-augusto-8b7350217/"
              target="blank"
              className="hover:text-primary-400"
            >
              <FaLinkedin />
            </Link>
          </div>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white  btn ;"
            >
              Contact Me
            </Link>
            <Link
              href="https://drive.google.com/file/d/1qlx_6tChGC4is4mISun_lkHfamAjnWvH/view?usp=sharing"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block gap-2 text-center justify-center items-center bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
                <FaFileDownload />
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/minha-foto.png"
              alt="miguel image"
              className="w-full mt-10 h-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
