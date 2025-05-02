# Fundraising Monorepo

## Project Overview
This repository is a monorepo setup for a fundraising platform. It includes a Next.js frontend, a NestJS backend, shared packages, AI integration, deployment setup, and documentation.

## Monorepo Setup
- [ ] Initialize Turborepo (`npx create-turbo@latest`)
- [ ] Configure shared ESLint (`packages/config/eslint-config-custom`)
- [ ] Set up shared TypeScript config (`packages/config/tsconfig`)
- [ ] Configure Turbo.json build pipeline
- [ ] Create root README.md with project overview

## Next.js Frontend (`apps/web`)
### Core Setup
- [ ] Initialize Next.js with TypeScript, Tailwind
- [ ] Configure shadcn-ui (`npx shadcn-ui@latest init`)
- [ ] Set up absolute imports (`@/*`)
- [ ] Add global styles (`styles/globals.css`)

## NestJS Backend (`apps/server`)
### Core Setup
- [ ] Initialize NestJS with strict TypeScript
- [ ] Configure Prisma ORM
- [ ] Set up PostgreSQL connection
- [ ] Implement Argon2 for password hashing

### Database
- [ ] Define Prisma schema (`prisma/schema.prisma`)
- [ ] Create initial migration
- [ ] Implement seed script
- [ ] Set up Prisma service

## Shared Packages
- [ ] `packages/db`:
  - [ ] Shared TypeScript types
  - [ ] Database client utilities
  - [ ] Validation schemas

- [ ] `packages/config`:
  - [ ] ESLint shared config
  - [ ] TypeScript base configs

## AI Integration
- [ ] Landing page generator service
- [ ] Donation optimization analyzer
- [ ] Implementation executor
- [ ] Error recovery system

## Deployment Setup
- [ ] Configure environment variables (`.env`)
- [ ] Prepare Dockerfiles for each app
- [ ] Configure health checks

## Documentation
- [ ] API documentation (Swagger)
- [ ] Component Storybook (optional)
- [ ] Development environment guide
- [ ] Contribution guidelines
