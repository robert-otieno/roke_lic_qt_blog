import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_ROKECMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
            }
          }
        }
      }
    `

    const result = await request(graphqlAPI, query);
    return result.postsConnection.edges;
}