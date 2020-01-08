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
      <h1>
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
      excerpt
    }
  }
`;
