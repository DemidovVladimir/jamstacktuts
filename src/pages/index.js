import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Card from "../components/card";


const IndexPage = ({data: {allContentfulLesson}}) => (
  <Layout>
    <SEO
        title="Learn Jam stack"
        keywords={['gatsby', 'jamstack', 'react', 'netlify']}
    />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
      <div className="flex flex-wrap -mx-3">
          {allContentfulLesson.edges.map(({node}) => (
              <Card
                node={{...node, slug: `lessons/${node.slug}`}}
                key={node.id}
              ></Card>
          ))}
      </div>
  </Layout>
);

export default IndexPage

export const query = graphql `{
    allContentfulLesson {
        edges {
            node {
                title
                slug
                image {
                    file {
                        url
                    }
                }
            }
        }
    }
}`;
