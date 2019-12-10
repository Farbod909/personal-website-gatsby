import React from "react";
import { graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <Sidebar />
      <Content>
        <h1 class="blog-post-title">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
