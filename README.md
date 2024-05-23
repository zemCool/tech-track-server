# Tech Track Server Documentation

## Introduction

The Tech Track Server is a Node.js application designed to manage and track technological tasks and projects. It leverages Express.js for handling HTTP requests and MongoDB for data storage.

## Features

- User authentication and authorization
- Task management (CRUD operations)
- Project tracking
- Middleware for error handling and request logging

## Installation

### Prerequisites

- Node.js (v14.x or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/zemCool/tech-track-server.git
   ```
2. Navigate to the project directory:
   ```bash
   cd tech-track-server
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file and add the following environment variables:
   ```plaintext
   PORT=3000
   MONGO_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   ```
5. Start the server:
   ```bash
   npm start
   ```

## Project Structure

- `controllers/`: Contains the logic for handling requests and responses.
- `models/`: Defines the Mongoose schemas for MongoDB.
- `routes/`: Defines the API endpoints.
- `middleware/`: Custom middleware for handling errors and authentication.
- `db.js`: MongoDB connection setup.
- `index.js`: Entry point of the application.

## API Endpoints

### Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - User login

### Tasks

- **GET** `/api/tasks` - Get all tasks
- **POST** `/api/tasks` - Create a new task
- **PUT** `/api/tasks/:id` - Update a task
- **DELETE** `/api/tasks/:id` - Delete a task

### Projects

- **GET** `/api/projects` - Get all projects
- **POST** `/api/projects` - Create a new project
- **PUT** `/api/projects/:id` - Update a project
- **DELETE** `/api/projects/:id` - Delete a project

## Error Handling

Middleware is used to handle errors consistently across the application. Custom error messages and status codes ensure clarity and ease of debugging.

## Security

- Passwords are hashed using bcrypt.
- JWTs are used for secure authentication.

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Create a pull request.

![Screenshot 2024-05-24 014527](https://github.com/zemCool/tech-track-server/assets/73570667/b8074a1f-5c0a-4229-81e7-0a9541e2eb0e)

![Screenshot 2024-05-24 014556](https://github.com/zemCool/tech-track-server/assets/73570667/29fa4d53-15b2-44ab-9914-129ec2ecb2d5)
