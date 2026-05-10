# DevMatch Backend

A NestJS backend API for the DevMatch application. It exposes an `Ayah` module that stores and serves Ayah documents from MongoDB using Mongoose, and is organized with NestJS modules, controllers, and providers for clear separation of concerns.

## Features

- NestJS 10 application
- TypeScript-based API
- MongoDB integration via `@nestjs/mongoose`
- `Ayah` resource module with schema, service, and controller
- Unit and e2e test support with Jest

## Requirements

- Node.js 20+
- npm
- MongoDB connection (Atlas or local instance)

## Setup

Install dependencies:

```bash
npm install
```

## Configuration

The MongoDB connection URI is currently configured in `src/app.module.ts`.

> For production use, move the connection URI to environment variables and avoid committing credentials to source control.

## Available scripts

```bash
npm run build
npm run start
npm run start:dev
npm run start:debug
npm run start:prod
npm run lint
npm run format
npm run test
npm run test:watch
npm run test:cov
npm run test:e2e
```

## Running the application

Start in development mode:

```bash
npm run start:dev
```

Start production:

```bash
npm run build
npm run start:prod
```

## Testing

Run unit tests:

```bash
npm run test
```

Run end-to-end tests:

```bash
npm run test:e2e
```

Generate coverage report:

```bash
npm run test:cov
```

## Notes

- Root module: `src/app.module.ts`
- Ayah module: `src/ayah/ayah.module.ts`
- Replace hardcoded database credentials with secure config before deployment
