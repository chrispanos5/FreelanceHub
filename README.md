# FreelanceHub
This is a React Dashboard with user authentication, protected routes, and a sidebar for navigation. The project includes a Node.js backend with MongoDB for storing user data and handling authentication.

Features
- User Authentication (Sign In & Sign Up)
- Protected Routes (Only accessible when logged in)
- Sidebar Navigation
- Dashboard & Profile Pages (still working on it)


Start the app

git clone <repository-url>
cd <project-folder>

Install Backend Dependencies

cd backend
npm install

Create a .env file in the server directory with the following configuration:

MONGODB_URI=your_mongo_connection_string

JWT_SECRET=your_jwt_secret_key

Start the backend

npm run dev

Install Frontend Dependencies

cd path-of-frontend (mine is freelancehub)
npm install

Authentication

Users must sign in to access the dashboard.
Protected routes are handled using ProtectedRoute.jsx.
The backend uses JWT (JSON Web Tokens) to authenticate users.

Future Improvements

Improved UI/UX
More dashboard features
API integration for dynamic data



