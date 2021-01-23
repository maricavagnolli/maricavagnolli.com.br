const { createFilePath } = require("gatsby-source-filesystem");
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const { data, errors } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: {
          fileAbsolutePath: { regex: "/posts/" }
          frontmatter: { category: { ne: "receitas" } }
        }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const articles = data.allMarkdownRemark.edges;
  const articlesPerPage = 6;
  const numPages = Math.ceil(articles.length / articlesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve("./src/templates/Blog.tsx"),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  const { data: allArticlesData } = await graphql(`
    query {
      allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
        filter: { fileAbsolutePath: { regex: "/posts/" } }
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  allArticlesData.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: `/blog/item${node.fields.slug}`,
      component: path.resolve("./src/templates/Post.tsx"),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    });
  });
};
