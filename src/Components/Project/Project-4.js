import React from "react";
import "./Project.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../../transition";

import ProjectImg from "../../Images/project-4.png";

const Project4 = () => {
  return (
    <>
      <div className="bg"></div>

      <Link to="/">
        <motion.div
          className="backButton"
          initial={{
            scale: 0,
            transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 1.5 },
          }}
          animate={{
            scale: 1,
            transition: {
              duration: 1.5,
              ease: [0.83, 0, 0.17, 1],
              delay: 0.5,
            },
          }}
        >
          <div className="back">
            <p>&#8592;</p>
          </div>
        </motion.div>
      </Link>
      <div className="project-container">
        <div className="project-info">
          <motion.div
            className="project-img"
            initial={{
              clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
              transition: {
                duration: 0.15,
                ease: [0.83, 0, 0.17, 1],
                delay: -0.1,
              },
            }}
            animate={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              transition: {
                duration: 1.75,
                ease: [0.83, 0, 0.17, 1],
                delay: -0.1,
              },
            }}
          >
            <motion.img
              src={ProjectImg}
              alt=""
              initial={{
                scale: 1.5,
                transition: {
                  duration: 0.15,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0,
                },
              }}
              animate={{
                scale: 1,
                transition: {
                  duration: 1.75,
                  ease: [0.83, 0, 0.17, 1],
                  delay: 0,
                },
              }}
            />
          </motion.div>
          <motion.div
            className="project-description"
            initial={{
              x: -40,
              opacity: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.25,
              },
            }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.25,
              },
            }}
          >
            <p>
              <b>Morning Code Challenge</b>
            </p>
            <p>
              A fun slot machine game I coded in OOP. One of my earlier projects that helped me 
              gain a better understanding of how to manipulate behavior using Javascript.
            </p>
          </motion.div>
        </div>
        <div className="footer">
          <motion.div
            className="divider"
            initial={{
              width: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
                delay: 1,
              },
            }}
            animate={{
              width: "100%",
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
                delay: 1,
              },
            }}
          ></motion.div>
          <motion.div
            className="footer-content"
            initial={{
              y: 200,
              opacity: 0,
              transition: { duration: 1, ease: [0.83, 0, 0.17, 1], delay: 2 },
            }}
            animate={{
              y: 0,
              opacity: 1,
              transition: {
                duration: 2,
                ease: [0.83, 0, 0.17, 1],
                delay: 0.5,
              },
            }}
          >
            <div className="footer-col">
              <div className="arrow">
                <p>&darr;</p>
              </div>
              <div className="arrow">
                <p>&darr;</p>
              </div>
            </div>
            <div className="footer-col">
              <p>
                (hosted on)
                <br /> netlify
              </p>
            </div>
            <div className="footer-col">
              <p>
                Slot machine <br /> Morning Code Challenge
              </p>
            </div>
            <div className="footer-col">
              <p>
                HTML CSS <br /> JAVASCRIPT
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default transition(Project4);
