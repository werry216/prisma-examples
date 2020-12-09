# GraphQL Server with Authentication & Permissions

This example shows how to implement a **GraphQL server with an email-password-based authentication workflow and authentication rules**, based on Prisma, [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [graphql-shield](https://github.com/maticzav/graphql-shield) & [Nexus Schema](https://nxs.li/components/standalone/schema). It is based on a SQLite database, you can find the database file with some dummy data at [`./prisma/dev.db`](./prisma/dev.db).

__INLINE(../_setup-0.md)__
curl https://codeload.github.com/prisma/prisma-examples/tar.gz/latest | tar -xz --strip=2 prisma-examples-latest/typescript/graphql-server-auth
__INLINE(../_setup-1.md)__
cd graphql-auth
__INLINE(../_setup-2.md)__
cd prisma-examples/typescript/graphql-auth
__INLINE(../_setup-3.md)__

__INLINE(../_start-graphql-server.md)__

__INLINE(../../_using-the-graphql-api-auth.md)__

__INLINE(../_evolving-the-app-graphql.md)__
__INLINE(../_next-steps.md)__
