import style from "./home.module.css"
import { motion } from "framer-motion"
import zee from "./assets/zeebuild.png"
import notify from "./assets/notify.png"
import jesla from "./assets/jesla.png"
import peace from "./assets/peace.jpg"
import rolex from "./assets/rolex.png"
import jeeva from "./assets/jprofile.png"
import logo from "/jflogo.png"
import { useState, useEffect } from "react"
import { FaJava, FaReact, FaNodeJs, FaGit, FaGithub, FaLinkedin } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiJavascript } from "react-icons/si";
import resume from "/JDFS.pdf";


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
      title: "Rolex",
      tech: "BootStrap• JavaScript • HTML/CSS",
      image: rolex,
      link: "https://rolex-zee.netlify.app/"
    },
    {
      title: "Notify",
      tech: "React • JavaScript • HTML/CSS",
      image: notify,
      link: "https://notify-boosted.netlify.app/"
    },
    {
      title: "Jesla",
      tech: "React • JavaScript • HTML/CSS",
      image: jesla,
      link: "https://jesla-cars.netlify.app/"
    },
    {
      title: "Course System",
      tech: "Java • Springboot • MySQL • Git",
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
          <div className={style.logo}>
  <img src={logo} alt="JF Logo" />
  <span>Jeeva</span>
</div>

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

  <div className={style.aboutContainer}>

    {/* LEFT */}
    <div className={style.aboutText}>
      <h3>Who I Am</h3>
      <p>
        I'm a Full Stack Developer focused on building modern, scalable, and
        high-performance web applications. I specialize in React, Node.js,
        and Spring Boot, creating seamless user experiences backed by strong backend systems.
      </p>

      <p>
        I enjoy turning complex ideas into clean and efficient solutions.
        From frontend UI/UX to backend API development, I aim to deliver
        reliable and production ready applications.
      </p>

      <div className={style.aboutButtons}>
        <a href={resume} download className={style.btn}>Download Resume</a>
      </div>
    </div>

    {/* RIGHT */}
    <div className={style.aboutCards}>

      <div className={style.card}>
        <h4>🎓 Education</h4>
        <p>Masters's Degree in Computer Applications</p>
        <span>2021 - 2025</span>
      </div>

      <div className={style.card}>
        <h4>💼 Experience</h4>
        <p>Full Stack Developer</p>
        <span>1+ Years Hands-on Projects</span>
      </div>

      <div className={style.card}>
        <h4>⚡ Skills</h4>
        <p>React, Node.js, Java, Spring Boot, MySQL</p>
      </div>

      <div className={style.card}>
        <h4>🚀 Focus</h4>
        <p>Building scalable apps & clean UI/UX</p>
      </div>

    </div>

  </div>
</motion.section>

        {/* SKILLS */}
<section className={style.section}>
  <h2 className={style.title}>Skills</h2>

  <div className={style.skillsContainer}>

    {/* LEFT SIDE */}
    <div className={style.skillsText}>
      <h3>My Expertise</h3>
      <p>
        I build full-stack applications with a strong focus on performance,
        scalability, and clean design. I work across frontend, backend,
        and database layers to deliver complete solutions.
      </p>

      <div className={style.skillTags}>
        {skills.map((skill, index) => (
          <span key={index}>{skill.name}</span>
        ))}
      </div>
    </div>

    {/* RIGHT SIDE */}
    <div className={style.skillsGrid}>
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={style.skillBox}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.08 }}
          viewport={{ once: true }}
        >
          <div className={style.skillIcon}>{skill.icon}</div>
          <h4>{skill.name}</h4>

          {/* fake progress (visual only, don’t overthink) */}
          <div className={style.progressBar}>
            <div className={style.progressFill}></div>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

        {/* PROJECTS */}
      {/* PROJECTS */}
<section id="projects" className={style.section}>
  <h2>Projects</h2>

  <div className={style.projectContainer}>

    {/* LEFT SIDE */}
    <div className={style.projectText}>
      <h3>What I've Built</h3>
      <p>
        Here are some of the projects I've worked on, focusing on building
        real-world applications with clean UI, strong backend logic, and
        scalable architecture.
      </p>
    </div>

    {/* RIGHT GRID */}
    <div className={style.projectGridNew}>
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          className={style.projectCardNew}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <div className={style.projectImage}>
            <img src={proj.image} alt={proj.title} />
          </div>

          <div className={style.projectContent}>
            <h3>{proj.title}</h3>

            <p className={style.projectDesc}>
              A modern web application built using {proj.tech}.
              Focused on performance, UI/UX, and real-world usability.
            </p>

            <div className={style.projectTech}>
              {proj.tech.split("•").map((t, idx) => (
                <span key={idx}>{t}</span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className={style.projectBtn}
            >
              View Project →
            </a>
          </div>
        </motion.div>
      ))}
    </div>

  </div>
</section>

        {/* CONTACT */}
<section id="contact" className={style.contactSection}>
  <h2>Contact Me</h2>

  <div className={style.contactWrapper}>

    {/* LEFT SIDE */}
    <div className={style.contactLeft}>
      <h3>Let’s Build Something</h3>
      <p>
        Got an idea, project, or opportunity? I’m open to collaborations,
        freelance work, and full-time roles. Let’s create something meaningful.
      </p>

      <div className={style.contactDetails}>
        <div>
          <span>📧</span>
          <p>jeevafreezee@gmail.com</p>
        </div>
        <div>
          <span>📞</span>
          <p>+91 7812844434</p>
        </div>
      </div>

      <div className={style.contactSocials}>
        <a href="https://github.com/redhodom">GitHub</a>
        <a href="https://www.linkedin.com/in/jeeva-d-72a53b2b6/">LinkedIn</a>
      </div>
    </div>

    {/* RIGHT SIDE */}
    <form
      className={style.contactRight}
      action="mailto:jeevafreezee@gmail.com"
      method="POST"
      encType="text/plain"
    >
      <div className={style.inputGroup}>
        <input type="text" name="name"  placeholder=" "  required />
        <label>Your Name</label>
      </div>

      <div className={style.inputGroup}>
        <input type="email" name="email" placeholder=" " required />
        <label>Your Email</label>
      </div>

      <div className={style.inputGroup}>
        <input type="text" name="company"  placeholder=" "  required />
        <label>Company Optional</label>
      </div>

      <div className={style.inputGroup}>
        <textarea name="message"  placeholder=" " rows="4" required></textarea>
        <label>Your Message</label>
      </div>

      <button type="submit" className={style.sendBtn}>
        Send Message 🚀
      </button>
    </form>

  </div>
</section>

      </motion.div>
    </>
  )
}

export default Home