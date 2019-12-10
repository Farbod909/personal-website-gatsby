import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./blog-post.module.css";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.blogPost}>
      <Link to="/blog">&lt; Blog</Link>
      <h1 style={{ fontSize: 54, lineHeight: "54px", marginBottom: 40 }}>
        {post.frontmatter.title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
