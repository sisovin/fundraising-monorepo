# Development Environment Guide

This guide will help you set up your development environment for the fundraising monorepo. Follow the steps below to get started.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later) or Yarn (v1.22 or later)
- Docker (v20 or later)
- Docker Compose (v1.27 or later)
- PostgreSQL (v13 or later)

## Monorepo Setup

1. **Clone the repository**: Clone the repository to your local machine using the following command:
   ```bash
   git clone https://github.com/githubnext/workspace-blank.git
   ```

2. **Install dependencies**: Navigate to the root directory of the repository and install the dependencies using npm or Yarn:
   ```bash
   cd workspace-blank
   npm install
   # or
   yarn install
   ```

3. **Initialize Turborepo**: Initialize Turborepo in the root directory:
   ```bash
   npx create-turbo@latest
   ```

4. **Configure shared ESLint**: Set up the shared ESLint configuration in `packages/config/eslint-config-custom`.

5. **Set up shared TypeScript config**: Configure the shared TypeScript configuration in `packages/config/tsconfig`.

6. **Configure Turbo.json build pipeline**: Set up the Turbo.json build pipeline in the root directory.

## Next.js Frontend (`apps/web`)

1. **Navigate to the frontend directory**:
   ```bash
   cd apps/web
   ```

2. **Initialize Next.js**: Initialize a new Next.js project with TypeScript and Tailwind CSS:
   ```bash
   npx create-next-app@latest --typescript
   ```

3. **Configure shadcn-ui**: Set up shadcn-ui in the Next.js project:
   ```bash
   npx shadcn-ui@latest init
   ```

4. **Set up absolute imports**: Configure absolute imports using the `@/*` alias.

5. **Add global styles**: Add global styles in `styles/globals.css`.

## NestJS Backend (`apps/server`)

1. **Navigate to the backend directory**:
   ```bash
   cd apps/server
   ```

2. **Initialize NestJS**: Initialize a new NestJS project with strict TypeScript:
   ```bash
   npx @nestjs/cli new server
   ```

3. **Configure Prisma ORM**: Set up Prisma ORM in the NestJS project.

4. **Set up PostgreSQL connection**: Configure the PostgreSQL connection in the NestJS project.

5. **Implement Argon2 for password hashing**: Set up Argon2 for password hashing in the NestJS project.

## Database

1. **Define Prisma schema**: Create the Prisma schema in `prisma/schema.prisma`.

2. **Create initial migration**: Generate the initial migration for the database:
   ```bash
   npx prisma migrate dev --name init
   ```

3. **Implement seed script**: Create a seed script to populate the database with initial data.

4. **Set up Prisma service**: Configure the Prisma service in the NestJS project.

## Shared Packages

### `packages/db`

1. **Shared TypeScript types**: Define shared TypeScript types in `packages/db`.

2. **Database client utilities**: Create database client utilities in `packages/db`.

3. **Validation schemas**: Define validation schemas in `packages/db`.

### `packages/config`

1. **ESLint shared config**: Set up the shared ESLint configuration in `packages/config/eslint-config-custom`.

2. **TypeScript base configs**: Define the base TypeScript configurations in `packages/config/tsconfig`.

## AI Integration

1. **Landing page generator service**: Implement the landing page generator service in the Next.js frontend.

2. **Donation optimization analyzer**: Implement the donation optimization analyzer in the Next.js frontend.

3. **Implementation executor**: Implement the implementation executor in the Next.js frontend.

4. **Error recovery system**: Implement the error recovery system in the Next.js frontend.

## Deployment Setup

1. **Configure environment variables**: Set up environment variables in the `.env` file.

2. **Prepare Dockerfiles**: Create Dockerfiles for each app (Next.js frontend and NestJS backend).

3. **Configure health checks**: Set up health checks for the Docker containers.

## Documentation

1. **API documentation (Swagger)**: Create API documentation using Swagger.

2. **Component Storybook (optional)**: Set up Storybook for component documentation.

3. **Development environment guide**: Follow this guide to set up your development environment.

4. **Contribution guidelines**: Refer to the `CONTRIBUTING.md` file for contribution guidelines.
