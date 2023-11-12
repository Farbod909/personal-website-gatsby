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
          Hello! My name is Farbod Rafezy.
        </p>
        <p>
          I currently work as a Software Engineer at Google, working on Account Infrastructure. I have industry experience working with C++, Java and Python on a variety of problems including but not limited to:
          <ul>
            <li>Web/iOS development</li>
            <li>Machine Learning</li>
            <li>Infrastructure/Backend</li>
            <li>Systems at scale</li>
          </ul>
          and I continue to learn every day, even in my free time.
        </p>
        <p>
          When I'm not working, I try to stay active (hiking/biking/swimming/snowboarding), learn new skills, hang with my friends, travel, watch TV, and find joy in the little things.
        </p>
        <p>
          Please reach me at{" "}
          <a href="mailto:rafezyfarbod@gmail.com">rafezyfarbod@gmail.com</a> with any questions or comments.
        </p>
      </Content>
    </div>
  );
};
