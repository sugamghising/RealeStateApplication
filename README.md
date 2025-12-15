# Real Estate Application

A modern real estate platform built with TypeScript, Express, and Prisma ORM. This backend service handles user authentication, property listings, messaging, and user interactions for a comprehensive real estate marketplace.

## Features

- **User Authentication**: JWT-based secure authentication with role-based access control
- **Property Listings**: Create, view, and manage property posts with images
- **Property Details**: Comprehensive property information including multiple images
- **Messaging System**: Real-time chat functionality between users
- **Saved Posts**: Users can save favorite properties for later
- **User Profiles**: Complete user management with role support

## Tech Stack

- **Runtime**: Node.js
- **Language**: TypeScript
- **Framework**: Express.js
- **Database ORM**: Prisma
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: bcrypt

## Project Structure

```
backend/
├── src/
│   ├── config/          # Database configuration
│   ├── controller/      # Request handlers
│   ├── middleware/      # Express middleware (auth, etc.)
│   ├── routes/          # API route definitions
│   ├── schemas/         # Input validation schemas
│   ├── services/        # Business logic
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Utility functions (JWT, hashing)
│   ├── lib/             # Library utilities
│   └── index.ts         # Application entry point
├── prisma/
│   ├── schema.prisma    # Database schema definition
│   └── migrations/      # Database migration history
└── package.json         # Dependencies and scripts
```

## Database Models

- **User**: User accounts with roles and authentication
- **Post**: Property listings
- **PostImage**: Images associated with posts
- **PostDetail**: Detailed information about properties
- **Chat**: Conversation threads between users
- **Message**: Individual messages within chats
- **ChatSeen**: Track read status of messages
- **SavedPost**: User's saved properties

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- PostgreSQL or compatible database

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables (create `.env` file):

```
DATABASE_URL="your_database_url"
JWT_SECRET="your_jwt_secret"
```

3. Run database migrations:

```bash
npx prisma migrate dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npx prisma studio` - Open Prisma Studio (database GUI)

## API Authentication

Protected routes require a Bearer token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

The authentication middleware validates the token and extracts user information for use in protected endpoints.
