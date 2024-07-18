import React from "react";
import Pancake from "../../assets/food/pancake.png";
import Eggs from "../../assets/food/fried_egg.png";
import Taco from "../../assets/food/taco.png";
import { motion } from "framer-motion";
import { SlideUp } from "../Hero/Hero/";

const PopularMealsData = [
  {
    id: 1,
    name: "Pancake",
    img: Pancake,
    price: "$4.89",
    delay: 0.4,
  },
  {
    id: 2,
    name: "Fried Eggs",
    img: Eggs,
    price: "$6.99",
    delay: 0.8,
  },
  {
    id: 3,
    name: "Taco",
    img: Taco,
    price: "$3.99",
    delay: 1.2,
  },
];

const PopularMeals = () => {
  return (
    <section>
      <div className="container py-24">
        <motion.h3
          variants={SlideUp(0.5)}
          initial="initial"
          whileInView="animate"
          className="text-4xl text-center font-league font-semibold uppercase py-8"
        >
          {" "}
          Our Popular Meals
        </motion.h3>

        {/* card section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center">
          {PopularMealsData.map((item) => {
            return (
              <div key={item.id} className="group space-y-3 text-center bg-white/50 shadow-xl p-3 rounded-xl ">
                <img
                  src={item.img}
                  alt="item img"
                  className="w-44 mx-auto img-shadow group-hover:scale-x-110 group-hover:translate-y-[-50px] group-hover:rotate-[50deg] transition-all duration-400"
                />
                <div>
                  <button className="btn-primary group-hover:mb-3 opacity-0 group-hpver:opacity-100">
                    Buy Now
                  </button>
                  <p className="text-xl font-semibold">{item.name}</p>
                  <p className="text-xl font-bold text-yellow-500">
                    {item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularMeals;
