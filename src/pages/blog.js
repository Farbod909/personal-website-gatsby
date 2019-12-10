import React from "react";
import { Link, graphql } from "gatsby";
import Sidebar from "../components/Sidebar";
import Content from "../components/Content";
import PageTitle from "../components/PageTitle";

const Post = props => (
  <div key={props.node.id}>
    <Link
      to={"posts/" + props.node.fields.slug}
      style={{
        textDecoration: "none",
        color: "#324332"
      }}
    >
      <h2
        style={{
          color: "#3bba6c",
          marginBottom: 10
        }}
      >
        {props.node.frontmatter.title}
      </h2>
      <h3
        style={{
          margin: 0
        }}
      >
        {props.node.frontmatter.date}
      </h3>
      <p style={{ marginTop: 5 }}>{props.node.excerpt}</p>
    </Link>
  </div>
);

export default ({ data }) => {
  return (
    <div>
      <Sidebar active="blog" />
      <Content>
        <PageTitle>Blog</PageTitle>
        <div>
          <ul style={{ padding: 0 }}>
            {data.allMarkdownRemark.nodes.map(node => (
              <Post node={node} />
            ))}
          </ul>
        </div>
      </Content>
    </div>
  );
};

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        timeToRead
        excerpt
        fields {
          slug
        }
      }
    }
  }
`;
