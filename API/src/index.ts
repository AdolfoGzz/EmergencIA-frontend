import { PrismaClient } from '@prisma/client';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';



const {typeDefs, Timestamp} = require('./Models/models');

const prisma = new PrismaClient();

const resolvers = {
    Timestamp,
    Query: {
        allUsers: () => {
            return prisma.users.findMany();
        }
    }
};

const server = new ApolloServer({ typeDefs, resolvers });
async function startServer() {
    const { url } = await startStandaloneServer(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
        listen: { port: 4000 },
    });
    console.log(`🚀  Server ready at ${url}`);
}

startServer();
