const { ApolloServer } = require('apollo-server')
const { applyMiddleware } = require('graphql-middleware')
const { nexusPrisma } = require('nexus-plugin-prisma')
const { makeSchema, declarativeWrappingPlugin } = require('@nexus/schema')
const { PrismaClient } = require('@prisma/client')
const { permissions } = require('./permissions')
const types = require('./types')

const prisma = new PrismaClient()

const server = new ApolloServer({
  schema: applyMiddleware(
    makeSchema({
      types,
      plugins: [nexusPrisma(), declarativeWrappingPlugin()],
      outputs: {
        schema: __dirname + '/../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
      },
    }),
    permissions
  ),
  context: (request) => {
    return {
      ...request,
      prisma,
    }
  },
})

server.listen().then(({ url }) =>
  console.log(
    `🚀 Server ready at: ${url}\n⭐️ See sample queries: http://pris.ly/e/js/graphql-auth#using-the-graphql-api`,
  ),
)
