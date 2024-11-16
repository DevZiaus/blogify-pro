
# Blogify Pro - Backend Solution for Blogging Platform

**Blogify Pro** is a powerful, scalable backend solution for building modern blog websites. Built with **Node.js**, **Express.js**, and **MongoDB**, this backend offers everything you need to manage users, posts, comments, and more. Ideal for developers looking to integrate a feature-rich blog backend, **Blogify Pro** is easy to deploy, customize, and extend.

---

## Key Features

- **Secure Authentication**:
  - JWT (JSON Web Token) for user authentication
  - Google OAuth integration for easy login
- **Admin Dashboard**:
  - Manage posts, users, and comments effortlessly
- **Post & Comment Management**:
  - Full CRUD (Create, Read, Update, Delete) functionality for blog posts and comments
- **User Interaction**:
  - Users can comment, like, and engage with content
- **Advanced Search Functionality**:
  - Users can search for posts by title, with sorting and filtering options
- **Built with**:
  - **Node.js** for the server-side application
  - **Express.js** for RESTful API routing
  - **MongoDB** for flexible and scalable database storage
- **Easy Deployment**:
  - Supports **Heroku** and **Vercel** for fast and reliable deployment

---

## Table of Contents

1. [Installation](#installation)
2. [Configuration](#configuration)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
5. [Deployment](#deployment)
6. [License](#license)

---

## Installation

To get started with **Blogify Pro**, follow the steps below:

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **MongoDB** (either locally or a cloud service like MongoDB Atlas)
- **npm** or **yarn** for package management

### Steps

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/blogify-pro.git
    cd blogify-pro
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and set up your environment variables (see the **Configuration** section for details).

4. Run the server in development mode:

    ```bash
    npm run dev
    ```

    The backend will now be running at `http://localhost:5000`.

---

## Configuration

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGO_URI=mongodb://your_mongo_connection
JWT_SECRET=your_jwt_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
PORT=5000
```

> **Note**: Make sure to replace the values with your actual credentials and configuration details.

---

## Usage

### Authentication & Security

- **JWT Authentication**: The app uses JWT tokens to secure user routes.
- **Google OAuth**: Users can log in using their Google accounts.

### Admin Dashboard

Admins can manage posts, users, and comments through the admin dashboard, which provides CRUD operations for all content.

### Post & Comment Management

- Create, read, update, and delete posts.
- Create, edit, delete, and like comments on posts.

### User Interaction

Users can interact with posts and comments by leaving comments, liking comments, and updating their posts (if they are the original author).

### Advanced Search Functionality

Users can search for posts by title and filter through results with advanced sorting options.

---

## API Endpoints

Here are the main API endpoints provided by **Blogify Pro**:

### Authentication Routes

- `POST /signup`: User signup (creates a new account)
- `POST /signin`: User login
- `POST /google`: Google OAuth login

### User Routes

- `GET /test`: Test route
- `PUT /update/:userID`: Update user profile (protected route)
- `DELETE /delete/:userID`: Delete user account (protected route)
- `GET /get-users`: Get a list of all users (protected route)
- `GET /:userId`: Get user details by userId

### Post Routes

- `POST /create-post`: Create a new post (protected route)
- `GET /get-posts`: Get a list of all posts
- `DELETE /delete-post/:postId/:userId`: Delete a post by postId and userId (protected route)
- `PUT /update-post/:postId/:userId`: Update a post (protected route)

### Comment Routes

- `POST /create`: Create a new comment (protected route)
- `GET /getPostComments/:postId`: Get comments for a specific post
- `PUT /likeComment/:commentId`: Like a comment (protected route)
- `PUT /editComment/:commentId`: Edit a comment (protected route)
- `DELETE /deleteComment/:commentId`: Delete a comment (protected route)
- `GET /get-Comments`: Get all comments (protected route)

---

## Deployment

**Blogify Pro** can be deployed in anywhere like **Heroku** and **Vercel**.

### Deploying on Heroku

1. Create a new app on **Heroku**.
2. Link the app with your GitHub repository or upload your code manually.
3. Set up environment variables in Heroku's dashboard under "Settings > Config Vars".
4. Deploy the app.

### Deploying on Vercel

1. Create a new project on **Vercel**.
2. Connect your GitHub repository to Vercel.
3. Set up environment variables in Vercel's dashboard under "Environment Variables".
4. Deploy the app.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to reach out if you have any questions or need further assistance. Enjoy building your blog with **Blogify Pro**!
