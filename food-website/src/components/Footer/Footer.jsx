import React from "react";
import Logo from "../../assets/food/logo2.png";
import {motion} from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      className="bg-lightYellow mx-auto"
      >
      <div className="container py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap:12">
          {/* Brand info */}
          <div className="space-y-3 lg:max-w-[300px]">
            <img src={Logo} alt="logo" className="w-24" />
            <p>
              Foodies is fresh, organic, and delicious breakfast options crafted
              with health and taste in mind.
            </p>
            <a href="#" className="inline-block mt-6 text-sm">
              foodies.organic@mail.com
            </a>
          </div>
          {/* Quick links */}
          <div className="col-span-2 grid grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h1 className="text-xl font-semibold">Company</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Home</li>
                <li className="footer-link">Our Story</li>
                <li className="footer-link">Support</li>
                <li className="footer-link">Menu</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Resources</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Find Us</li>
                <li className="footer-link">Mission</li>
                <li className="footer-link">Help</li>
                <li className="footer-link">Dishes</li>
              </ul>
            </div>
            <div>
              <h1 className="text-xl font-semibold">Connect</h1>
              <ul className="space-y-3 mt-6">
                <li className="footer-link">Start Here</li>
                <li className="footer-link">Our Team</li>
                <li className="footer-link">Get in Touch</li>
                <li className="footer-link">Food Items</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
