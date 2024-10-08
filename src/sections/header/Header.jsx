import { useEffect } from "react";
import HeaderImage from "../../assets/profilbild.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div
          className="header__profile"
          data-aos="fade-in"
        >
          <img
            src={HeaderImage}
            alt="Header Portait"
          />
        </div>
        <h3 data-aos="fade-up">
          William Janssen
        </h3>
        <p data-aos="fade-up">
          Welcome to my portfolio! I'm
          William Janssen, a passionate
          Fullstack Developer. Currently
          searching for an internship in
          the field of web development.
          I'm always looking for new
          challenges and opportunities
          to grow. Feel free to reach
          out to me if you have any
          questions or would like to
          work together.
        </p>
        <div
          className="header__cta"
          data-aos="fade-up"
        >
          <a
            href="#contact"
            className="btn primary"
          >
            Let's Talk
          </a>
          <a
            href="#portfolio"
            className="btn light"
          >
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
