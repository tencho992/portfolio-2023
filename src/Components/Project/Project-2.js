import React from "react";
import "./Project.css";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import transition from "../../transition";

import ProjectImg from "../../Images/project-2.png";

const Project2 = () => {
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
              <b>Welcome to TibNation!</b>
            </p>
            <p>
             Users can sign up with their google accounts and access a personal profile 
              page. Once authenticated the user can complete courses at their own pace, as well as 
              leave comments on the course (reviews),
              and update their user information. <b>Modules include:</b> Flash cards, Writing pad with a character 
              reference for handwriting practice, a translator, a fun memory card game and a final quiz. These 
              prompts allow the user to earn points as they proceed through the course. 
              <br></br>visit: tibnation.onrender.com
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
                <br /> render
              </p>
            </div>
            <div className="footer-col">
              <p>
                TibNation <br /> Full stack dev
              </p>
            </div>
            <div className="footer-col">
              <p>
                MongoDB, Google Cloud,  <br /> EJS, Express, Node.js
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default transition(Project2);
