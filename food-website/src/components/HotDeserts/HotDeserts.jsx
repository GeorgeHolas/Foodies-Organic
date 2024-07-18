import React from "react";
import Porridge from "../../assets/food/porridge.png";
import Waffle from "../../assets/food/waffle.png";
import Pancake from "../../assets/food/pancake.png";
import Steak from "../../assets/food/steak.png";
import Eggs from "../../assets/food/fried_egg.png";
import Taco from "../../assets/food/taco.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero/";

const HotDessertsData = [
  {
    id: 1,
    name: "Porridge",
    img: Porridge,
    price: "$6.99",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Waffle",
    img: Waffle,
    price: "$5.20",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Pancake",
    img: Pancake,
    price: "$4.89",
    delay: 1.2,
  },
  {
    id: 4,
    name: "Steak",
    img: Steak,
    price: "$10.99",
    delay: 1.6,
  },
  {
    id: 5,
    name: "Fried Eggs",
    img: Eggs,
    price: "$6.99",
    delay: 2.0,
  },
  {
    id: 6,
    name: "Taco",
    img: Taco,
    price: "$3.99",
    delay: 2.4,
  },
];
const HotDeserts = () => {
  return (
    <section>
      <div className="container py-12">
        {/* heading section */}
        <motion.h3
          variants={SlideUp(0)}
          initial="initial"
          whileInView="animate"
          className="text-2xl font-semibold text-darkGreen upperscase py-8"
        >
          Top Breakfasts
        </motion.h3>
        {/* grid section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
          {HotDessertsData.map((item) => {
            return (
              <motion.div
                key={item.id}
                variants={SlideUp(item.delay)}
                initial="initial"
                whileInView="animate"
                className="group bg-white/40 shadow-md p-3 flex items-center gap-3"
              >
                <img
                  src={item.img}
                  alt="item name"
                  className="w-24 rounded-full img-shadow group-hover:scale-125 transition-all duration-700 group-hover:rotate-[50deg]"
                />
                <div>
                  <h3 className="text-xl font-semibold">{item.name}</h3>
                  <p className="text-xl text-yellow-500">{item.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HotDeserts;
