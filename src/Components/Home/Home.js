import React from "react";
import "./Home.css";

import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import transition from "../../transition";

import Project1Img from "../../Images/project-1.png";
import Project2Img from "../../Images/project-2.png";
import Project3Img from "../../Images/project-3.png";
import Project4Img from "../../Images/project-4.png";
import Project5Img from "../../Images/project-5.png";

const Home = () => {
  return (
    <motion.div className="Home">
      <div className="bg"></div>
      <section className="hero">
        <div className="headers">
          <div className="header header-1">
            <h1>
              <motion.div
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                className="h1"
              >
                Tenzin Chosang
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;Fullstack
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dev.
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
          <div className="header header-2">
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.25,
                  },
                }}
              >
                portfolio
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: -0.1,
                  },
                }}
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2023
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
            <h1>
              <motion.div
                className="h1"
                initial={{
                  top: "7rem",
                  transition: {
                    duration: 1,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
                animate={{
                  top: 0,
                  transition: {
                    duration: 1.5,
                    ease: [0.83, 0, 0.17, 1],
                    delay: 0.05,
                  },
                }}
              >
                {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &2023 */}
              </motion.div>
              <div className="h1-revealer"></div>
            </h1>
          </div>
        </div>
        <div className="footer">
          <motion.div
            className="divider"
            initial={{
              width: 0,
              transition: {
                duration: 1,
                ease: [0.83, 0, 0.17, 1],
              },
            }}
            animate={{
              width: "100%",
              transition: {
                duration: 1.5,
                ease: [0.83, 0, 0.17, 1],
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
                currently creating at <br />TenCho Designs
              </p>
            </div>
            <div className="footer-col">
              <p>
                prev SWE at <br /> Resilient Coders
              </p>
            </div>
            <div className="footer-col">
              <p>
                prev bartender <br /> at barcelona
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="projects-nav">
        <div className="projects-nav-container">
          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project1Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Tattoo Artist Portfolio</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project2Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>TibNation</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project3Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Community-Catalyst</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>DevOps</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project4Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Slot Machine</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>JS experience</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="project-item">
            <Link to="/project">
              <div className="project-link">
                <div className="project-l">
                  <div className="project-link-img">
                    <img src={Project5Img} alt="" />
                  </div>
                  <div className="project-name">
                    <h2>Tic-Tac-Toe</h2>
                  </div>
                </div>
                <div className="project-date">
                  <p>development</p>
                  <p>/2023</p>
                </div>
                <div className="project-dir">
                  <p>&#8599;</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <section className="about">
        <div className="about-container">
          <div className="about-col">
            <p>Meet Tenzin</p>
            <p>
            <em>a highly skilled and adaptable programmer with a passion for technology and a growth mindset. </em><br></br><br></br>Specializing in React.js, Node.JS, CSS, and JavaScript, she possesses a deep understanding of algorithms and multidimensional data structures, enabling her to tackle complex programming challenges with ease.
<br></br><br></br>
Tenzin's proficiency extends beyond front-end development, <br></br>as she is well-versed in databases like MongoDB and adept at navigating the Google Cloud Console. <br></br><br></br>Her critical thinking abilities allow her to approach problems from various angles, leading to innovative solutions and enhanced project outcomes.

Driven by a curiosity for design, aesthetics, and effective functionality. Tenzin's appreciation for these elements fuels her desire to create user-friendly and visually appealing experiences within the technological landscape.
<br></br><br></br>
Ever-committed to personal and professional growth, Tenzin actively seeks feedback and constructive criticism to continuously enhance her abilities. Her dedication to improvement ensures that she remains at the cutting edge of the ever-evolving world of programming.

With a strong foundation in programming principles, Tenzin consistently delivers exceptional results. Her intentional approach to problem-solving and her passion for technology make her a valuable asset to any software engineering team. 
<br></br><br></br>
So, if you're looking for a proactive and talented programmer to elevate your projects to new heights, Tenzin is the perfect fit.  
              
            </p>
          </div>
          <div className="about-col">
            <div className="socials">
              <a href="mailto:tencho.dev@gmail.com">email &#8599;</a>
              <a target="_blank" href="https://linkedin.com/in/tenchodev">LinkedIn &#8599;</a>
              <a target="_blank" href="https://www.github.com/tencho992">GITHUB &#8599;</a>
              <a target="_blank" href="https://twitter.com/tenzindev">twitter &#8599;</a>
              <a target="_blank" href="https://calendly.com/tenchodev">Schedule Time &#8599;</a>

            </div>
          </div>
        </div>
      </section>
      
      <div className="footer">
        <div className="divider"></div>
        <div className="footer-content">
          <div className="footer-col">
            <div className="arrow">
              <p>&#8593;</p>
            </div>
            <div className="arrow">
              <p>&#8593;</p>
            </div>
          </div>
          <div className="footer-col">
            <p>
              &copyright by <br /> not codegrid
            </p>
          </div>
          <div className="footer-col">
            <p>
              no rights for <br /> creative dev
            </p>
          </div>
          <div className="footer-col">
            <p>
              no rights for <br /> any design
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default transition(Home);
