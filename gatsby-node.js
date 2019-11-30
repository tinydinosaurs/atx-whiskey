/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`)
const slash = require(`slash`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  // fetch data from Contentful
  return graphql(`
    {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
            title
          }
        }
      }
    }
  `)
    .then(result => {
      if (result.error) {
        console.log("Error retrieving contentful data", result.errors)
      }

      // Resolve the paths to our template
      const blogPostTemplate = path.resolve("./src/templates/blogpost.js")

      // Then for each result we create a page.
      result.data.allContentfulBlogPost.edges.forEach(edge => {
        createPage({
          path: `/blogpost/${edge.node.slug}/`,
          component: slash(blogPostTemplate),
          context: {
            slug: edge.node.slug,
            id: edge.node.id,
          },
        })
      })
    })
    .catch(error => {
      console.log("Error retrieving contentful data", error)
    })
}
