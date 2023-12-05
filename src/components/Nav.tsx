import React, { useState } from "react";
import { motion } from "framer-motion";
import { VscThreeBars } from "react-icons/vsc";
import { useMediaQuery } from "../utils/useMediaQuery";
import { RxCross1 } from "react-icons/rx";

const navMotion = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
  hidden: {
    opacity: 0,
  },
};

const itemMotion = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  const matches = useMediaQuery("(min-width: 1280px)");

  return (
    <header>
      <nav className="relative mx-8 mb-24">
        {!matches && (
          <button className="z-50" onClick={() => setToggle((pre) => !pre)}>
            <VscThreeBars size={30} />
          </button>
        )}
        {matches && (
          <div className="flex gap-12 items-center">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/service">service</a>
            <a href="/contact">contact</a>
            <a href="/blog">blog</a>
          </div>
        )}
        {/* check for mobile device  */}
        {toggle && !matches && (
          <div>
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 25 }}
              className="fixed bg-zinc-50 bottom-0 left-0 w-full h-screen flex items-center justify-center z-50"
            >
              <div className="fixed top-0 right-0 p-10">
                <button
                  className="z-50"
                  onClick={() => setToggle((pre) => !pre)}
                >
                  <RxCross1 size={30} />
                </button>
              </div>
              <motion.div
                variants={navMotion}
                animate="visible"
                initial="hidden"
                className="flex flex-col gap-20 font-semibold"
              >
                <motion.a variants={itemMotion} href="/">
                  Home
                </motion.a>
                <motion.a variants={itemMotion} href="/about">
                  About
                </motion.a>
                <motion.a variants={itemMotion} href="/service">
                  service
                </motion.a>
                <motion.a variants={itemMotion} href="/contact">
                  contact
                </motion.a>
                <motion.a variants={itemMotion} href="/blogs">
                  Blogs
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Nav;
