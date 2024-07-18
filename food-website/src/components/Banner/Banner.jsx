import React from "react";
import Waffle from "../../assets/food/waffle.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero";

const Banner = () => {
  return (
    <section>
      <div className="container py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 place-items-center">
          {/* image section */}
          <div className="relative">
            <motion.img
              initial={{
                opacity: 0,
                x: -100,
                y: 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              whileHover={{
                scale: 1.1,
                rotate: 15,
                x: 50,
                y: -50,
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                scale: { duration: 0.5 },
              }}
              src={Waffle}
              alt="waffle"
              className="relative z-10 w-full lg:max-w[350px] img-shadow"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute top-[50%] right-[50%] 
            transform translate-x-[50%] translate-y-[-50%] h-[320px] 
            w-[320px] md:h-[400px] md:w-[400px] bg-lightYellow rounded-full"
            ></motion.div>
          </div>
          {/* text content section */}
          <div className="space-y-5 lg:max-w-[400px]">
            <motion.h1
              variants={SlideUp(1.0)}
              initial="initial"
              whileInView="animate"
              className="text-6xl uppercase font-semibold font-league"
            >
              The best yummy breakfasts in the town
            </motion.h1>
            <motion.p
              variants={SlideUp(1.3)}
              initial="initial"
              whileInView="animate"
            >
              A waffle with cream, strawberries, and blueberries is a delightful
              breakfast treat. The golden-brown waffle is topped with a dollop
              of fluffy whipped cream, and garnished with fresh, juicy
              strawberries and plump blueberries, creating a perfect balance of
              sweetness and texture
            </motion.p>
            <motion.button
              variants={SlideUp(1.6)}
              initial="initial"
              whileInView="animate"
              className="btn-primary"
            >
              Order Now
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
