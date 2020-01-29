import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "gatsby";
import meImg from "../../images/me.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithubAlt } from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ListLink = props => (
  <li>
    <Link
      to={props.to}
      style={props.style}
      className={props.active ? styles.active : ""}
    >
      {props.children}
    </Link>
  </li>
);

class Sidebar extends React.Component {
  render() {
    return (
      <aside className={styles.sidebar}>
        <img
          style={{
            width: 130,
            height: 130,
            borderRadius: 130
          }}
          src={meImg}
          alt="Farbod Rafezy"
        ></img>
        <h3 style={{ fontSize: 28 }}>Farbod Rafezy</h3>
        <span style={{ color: "gray" }}>
          Irvine, CA{" "}
          <span role="img" aria-label="pin">
            📍
          </span>
        </span>
        <p>
          4th year Computer Science student at UCI; lifelong learner; blissful ignorance
        </p>
        <ul className={styles.menuList}>
          <ListLink to="/" active={this.props.active === "portfolio"}>
            Portfolio
          </ListLink>
          <ListLink to="/blog" active={this.props.active === "blog"}>
            Blog
          </ListLink>
          <ListLink to="/about" active={this.props.active === "about"}>
            About me
          </ListLink>
        </ul>
        <ul className={styles.socialList}>
          <a href="https://github.com/Farbod909" title="Github">
            <li>
              <FontAwesomeIcon icon={faGithubAlt} />
            </li>
          </a>
          <a href="https://linkedin.com/in/frafezy" title="Linkedin">
            <li>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </li>
          </a>
          <a href="mailto:rafezyfarbod@gmail.com" title="Email">
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
            </li>
          </a>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
