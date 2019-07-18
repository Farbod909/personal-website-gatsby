import React from "react"
import { Link, graphql } from "gatsby"

export default ({ data }) => {
  return (
    <div>
      <h1>Posts</h1>
      <div>
        <ul>
          {data.allMarkdownRemark.nodes.map(node => (
            <div key={node.id}>
              <Link to={"posts/" + node.fields.slug}>
                <h3>
                  {node.frontmatter.title}{" "}
                  <span>— {node.frontmatter.date}</span>
                </h3>
                <p>{node.excerpt}</p>
              </Link>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD MMMM, YYYY")
        }
        timeToRead
        excerpt
        fields {
          slug
        }
      }
    }
  }
`
