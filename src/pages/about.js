import React from "react";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";
import SEO from "../components/seo";

export default () => {
  return (
    <div>
      <SEO title="About me" />
      <Sidebar active="about" />
      <Content>
        <PageTitle>About me</PageTitle>
        <p>
          Hello! My name is Farbod and I'm a fourth year Computer Science
          student at UC Irvine specializing in Intelligent Systems.
        </p>
        <p>
          I’m from Tabriz, Iran and I’ve moved around all my life. Now I live in
          Irvine, CA but I'll be moving to the bay area soon.
        </p>
        <p>
          I love going to the beach and swimming when I have free time. I love
          learning and I want to learn graphic design and how to surf. I love
          listening to hip hop and R&B and my favorite musical artist is EDEN.
        </p>

        <p>
          I recently started a venture to end parking problems. It’s called
          Curbd and it can be simply described as the Airbnb for parking.
        </p>

        <p>
          My email is{" "}
          <a href="mailto:rafezyfarbod@gmail.com">rafezyfarbod@gmail.com</a> if
          you want to talk more!
        </p>
      </Content>
    </div>
  );
};
