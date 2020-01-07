/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const {createPage} = actions;
  const lessonTemplate = path.resolve(`src/templates/lesson.js`);
  const instructorTemplate = path.resolve(`src/templates/instructor.js`);
  const result = await graphql(`
  {
    allContentfulLesson {
        edges {
            node {
                slug
            }
        }
    }
    allContentfulInstructor {
        edges {
            node {
                slug
            }
        }
    }
  }
  `)

    result.data.allContentfulLesson.edges.forEach(edge => {
        createPage({
            path: `lessons/${edge.node.slug}`,
            component: lessonTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    });
    result.data.allContentfulInstructor.edges.forEach(edge => {
        createPage({
            path: `instructors/${edge.node.slug}`,
            component: instructorTemplate,
            context: {
                slug: edge.node.slug
            }
        })
    });
};

// You can delete this file if you're not using it
