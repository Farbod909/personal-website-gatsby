import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";
import SEO from "../components/seo";

import googleImg from "../images/google.png";
import wdImg from "../images/wd.png";
import bentleyImg from "../images/bentley.png";
import curbdImg from "../images/curbd.png";
import skimImg from "../images/skim.png";
import morteamImg from "../images/morteam.png";
import unofileImg from "../images/unofile.png";

const PortfolioItem = props => (
  <a
    href={props.link}
    style={{
      color: "#324332",
      textDecoration: "none"
    }}
  >
    <div
      style={{
        height: 60,
        marginBottom: 20
      }}
    >
      <img
        src={props.imgsrc}
        alt={props.title}
        style={{
          width: 60,
          height: 60,
          float: "left",
          borderRadius: 60
        }}
      ></img>
      <div
        style={{
          paddingLeft: 20,
          height: 60,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start"
        }}
      >
        <span style={{ fontWeight: "bold", fontSize: 18 }}>{props.title}</span>
        <span>{props.subtitle}</span>
      </div>
    </div>
  </a>
);

export default () => {
  return (
    <div>
      <SEO title="Farbod Rafezy - Portfolio" />
      <Sidebar active="portfolio" />
      <Content>
        <PageTitle>Portfolio</PageTitle>
        <h3>Projects</h3>
        <PortfolioItem
          title="Curbd"
          subtitle="Airbnb for parking"
          imgsrc={curbdImg}
          link="http://www.curbdparking.com"
        />
        <PortfolioItem
          title="Skim"
          subtitle="Ctrl-F for your camera"
          imgsrc={skimImg}
          link="https://devpost.com/software/skim"
        />
        <PortfolioItem
          title="MorTeam"
          subtitle="Collaboration app for FRC teams"
          imgsrc={morteamImg}
          link="http://morteam.com"
        />
        <PortfolioItem
          title="UnoFile"
          subtitle="Share files using short links"
          imgsrc={unofileImg}
          link="http://unofile.net"
        />

        <h3>Experience</h3>
        <PortfolioItem
          title="Google"
          subtitle="Incoming Software Engineer"
          imgsrc={googleImg}
        />
        <PortfolioItem
          title="Western Digital"
          subtitle="Software Engineering Intern"
          imgsrc={wdImg}
        />
        <PortfolioItem
          title="Bentley Systems"
          subtitle="Software Engineering Intern"
          imgsrc={bentleyImg}
        />
      </Content>
    </div>
  );
};
