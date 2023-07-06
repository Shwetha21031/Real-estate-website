import React from "react";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import {motion, spring} from 'framer-motion';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container ">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle"></div>
            <motion.h1
            initial={{y:"2rem",opacity:0}}
            animate={{y:0,opacity:1}}
            transition={
              {duration: 2,
                type: "spring"
            }}
            >
              Discover <br />
              Most Suitable <br />
              Property
            </motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">
              Find a variety of properties that suits you very easily
            </span>
            <span className="secondaryText">
              Forget all difficultiess in finding a residence
            </span>
          </div>

          <div className="flexCenter search-bar ">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColStart stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} />
                <span>+</span>
              </span>
              <span className="secondaryText">Happy customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={29} />
                <span>+</span>
              </span>
              <span className="secondaryText">Award winnings</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <motion.div 
          initial={{x: "7rem",opacity: 0}}
          animate={{x: 0,opacity:1}}
          transition={{
            duration:2,
            type:"spring"
          }}
          className="image-container">
            <img src="./hero.jpg" alt="hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
