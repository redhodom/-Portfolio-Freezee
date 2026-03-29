import style from "./home.module.css"
import { motion } from "framer-motion"
import zee from "./assets/zeebuild.png"
import notify from "./assets/notify.png"
import jesla from "./assets/jesla.png"
import peace from "./assets/peace.jpg"
import jeeva from "./assets/jprofile.png"
import { useState, useEffect } from "react"
import { FaJava, FaReact, FaNodeJs, FaGit, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript } from "react-icons/si";
import resume from "/Jeevaresume.pdf";


const Home = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  const projects = [
    {
      title: "ZeeBuild",
      tech: "React • JavaScript • HTML/CSS",
      image: zee,
      link: "https://zee-build.netlify.app/"
    },
    {
      title: "Notify",
      tech: "React • JavaScript • HTML/CSS",
      image: notify,
      link: "https://your-live-demo.com"
    },
    {
      title: "Jesla",
      tech: "React • JavaScript • HTML/CSS",
      image: jesla,
      link: "https://jesla-cars.netlify.app/"
    },
    {
      title: "Rolex",
      tech: "React • JavaScript • HTML/CSS",
      image: peace,
      link: "https://github.com/yourlink"
    },
    {
      title: "Course System",
      tech: "Java • Springboot • MySQL • Git",
      image: peace,
      link: "https://github.com/yourlink"
    },
    {
      title: "Rolex",
      tech: "React • JavaScript • HTML/CSS",
      image: peace,
      link: "https://github.com/yourlink"
    },{
      title: "Rolex",
      tech: "React • JavaScript • HTML/CSS",
      image: peace,
      link: "https://github.com/yourlink"
    },{
      title: "Rolex",
      tech: "React • JavaScript • HTML/CSS",
      image: peace,
      link: "https://github.com/yourlink"
    }
  ]

  const skills = [
    { name: "Java", icon: <FaJava /> },
    { name: "ReactJS", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "Git", icon: <FaGit /> },
    { name: "GitHub", icon: <FaGithub /> }
  ];

  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight

      const scrollPosition = window.scrollY

      const percentage = (scrollPosition / totalHeight) * 100
      setScroll(percentage)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])

  // 👇 THIS IS THE FIX
  if (loading) {
    return <div className={style.loader}>Loading...</div>
  }

  return (
    <>
      <div
        className={style.progress}
        style={{ width: `${scroll}%` }}
      ></div>

      <motion.div
        className={style.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >



        {/* NAVBAR */}
        <nav className={style.navbar}>
          <h2 className={style.logo}>JEEVA</h2>

          {/* Hamburger */}
          <div
            className={style.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          {/* Links */}
          <div className={`${style.navlinks} ${menuOpen ? style.active : ""}`}>
            <a href="#">Home</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section className={style.hero}>
          <div className={style.infocontainer}>

            <motion.div
              className={style.imgcontainer}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={jeeva} alt="Jeeva" />
            </motion.div>

            <div className={style.line}></div>

            <motion.div
              className={style.info}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className={style.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Hi, I'm Jeeva D
              </motion.h1>

              <motion.h2
                className={style.role}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                Full Stack Developer
              </motion.h2>

              <motion.p
                className={style.tagline}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                Building scalable web applications with React, Node.js, and clean UI/UX.
                Experienced in Java and Spring Boot for backend development, creating RESTful APIs,
                and ensuring data integrity using MySQL. Skilled in API testing and debugging with Postman,
                delivering reliable and efficient full-stack solutions.
              </motion.p>

              <div className={style.actionbutton}>
                <a href="#projects" className={style.btn}>Projects</a>
                <a href="#contact" className={style.btn}>Contact</a>
                <a href={resume} download className={style.btn}>Resume</a>
              </div>

              <div className={style.socials}>
                <a href="https://github.com/redhodom"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/jeeva-d-72a53b2b6/"><FaLinkedin /></a>
              </div>

            </motion.div>

          </div>
        </section>

        {/* ABOUT */}
        <motion.section
          className={`${style.section} ${style.about}`}
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>About Me</h2>
          <p>
            I’m a passionate Full Stack Developer with a strong focus on building clean, responsive, and high-performance web applications. I specialize in technologies like ReactJS, Node.js, and Spring Boot, and I enjoy creating seamless user experiences backed by scalable architectures.

            I’ve worked on projects ranging from e-commerce platforms like ZeeBuild to dynamic applications like Notify, where I focused on UI/UX, real-time features, and performance optimization. My backend experience includes designing RESTful APIs, implementing CRUD operations, and ensuring data integrity using Java, Spring Boot, and MySQL.

            I’m always eager to learn, improve, and take on new challenges that push my technical and creative boundaries. Whether it's crafting intuitive interfaces or building reliable backend systems, I aim to deliver solutions that are both efficient and user-focused.
          </p>
        </motion.section>

        {/* SKILLS */}
        <section className={style.section}>
          <h2 className={style.title}>Skills</h2>

          <div className={style.skills}>
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className={style.skillCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={style.icon}>{skill.icon}</div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
       <section id="projects" className={style.section}>
  <h2>Projects</h2>

  <div className={style.projectGrid}>
    {projects.map((proj, i) => (
      <div className={style.projectCard} key={i}>
        <img src={proj.image} alt={proj.title} />

        <h3>{proj.title}</h3>

        <p className={style.tech}>
          {proj.tech}
        </p>

        <a
          href={proj.link}
          target="_blank"
          rel="noopener noreferrer"
          className={style.projectBtn}
        >
          View Project
        </a>
      </div>
    ))}
  </div>
</section>

        <section className={style.section}>
          <h2>Experience</h2>

          <div className={style.timeline}>
            <div className={style.timelineItem}>
              <h3>Full Stack Developer</h3>
              <span>2025 - Present</span>
              <p>Built scalable web apps using React, Node, and Spring Boot.</p>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className={style.contactSection}>
          <h2>Contact Me</h2>

          <div className={style.contactContainer}>

            {/* LEFT SIDE */}
            <div className={style.contactInfo}>
              <h3>Let's Work Together</h3>
              <p>I’m open to opportunities, freelance, and collaborations.</p>

              <p>📧 <span>jeevafreezee@gmail.com</span></p>
              <p>📞 <span>+91 7812844434</span></p>

              <div className={style.contactBtns}>
                <a href="mailto:jeevafreezee@gmail.com" className={style.btn}>
                  Email Me
                </a>
                <a href="tel:+917812844434" className={style.btn}>
                  Call Me
                </a>
              </div>
            </div>

            {/* RIGHT SIDE FORM */}
            <form
              className={style.contactForm}
              action="mailto:jeevafreezee@gmail.com"
              method="POST"
              encType="text/plain"
            >
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="company" placeholder="Company Name" />
              <textarea name="message" placeholder="Your Message" rows="4"></textarea>

              <button type="submit" className={style.submitBtn}>
                Send Message
              </button>
            </form>

          </div>
        </section>

      </motion.div>
    </>
  )
}

export default Home