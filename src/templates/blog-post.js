import React from "react";
import { graphql, Link } from "gatsby";
import styles from "./blog-post.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import SEO from "../components/seo";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className={styles.blogPost}>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Link to="/blog" className={styles.backButton}>
        <FontAwesomeIcon icon={faChevronLeft} /> Blog
      </Link>
      <div className={post.frontmatter.type === "essay" ? styles.essayStyle : styles.normalStyle}>
        <h1 style={{marginTop: 40}}>
          {post.frontmatter.title}
        </h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} style={{marginTop: 30}} />
      </div>
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
        type
      }
      excerpt
    }
  }
`;
