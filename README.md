# Uber Clone

This project is a full-stack Uber clone that provides a platform for users to book rides and for captains (drivers) to manage their rides. It is built with a **React** frontend and a **Node.js/Express** backend, with **MongoDB** as the database.

---

## Features

### User Features:
- **User Registration and Login**: Users can sign up and log in to the platform.
- **Book a Ride**: Users can select pickup and destination locations, choose a vehicle type, and book a ride.
- **Live Ride Updates**: Users can track their ride status in real-time.
- **Logout**: Users can log out securely.

### Captain (Driver) Features:
- **Captain Registration and Login**: Captains can sign up and log in to the platform.
- **Manage Rides**: Captains can view and accept ride requests.
- **Ride Completion**: Captains can mark rides as completed.
- **Logout**: Captains can log out securely.

### Admin Features:
- **Authentication Middleware**: Protect routes for both users and captains using JWT-based authentication.
- **Token Blacklisting**: Blacklist tokens on logout to prevent unauthorized access.

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **React Router**: For navigation and route protection.
- **Tailwind CSS**: For styling the application.
- **Axios**: For making HTTP requests to the backend.

### Backend:
- **Node.js**: For server-side logic.
- **Express.js**: For building RESTful APIs.
- **MongoDB**: For storing user, captain, and ride data.
- **Mongoose**: For MongoDB object modeling.
- **JWT**: For authentication and authorization.
- **Bcrypt**: For password hashing.

---

---

## Project Status

### Current Progress:
- The project is **unfinished**.
- The basic functionality for user and captain authentication, ride booking, and ride management is implemented.

### Remaining Work:
- **UI Improvements**: The user interface needs enhancements to improve usability and aesthetics.
- **Deployment**: The project is not yet deployed. Deployment to a platform like **Vercel**, **Netlify**, or **Heroku** is required.
- **Additional Features**: Features like real-time ride tracking, payment gateway integration, and an admin dashboard are yet to be implemented.

---

## Project Structure

### Frontend:
Frontend/ ├── src/ │ ├── components/ │ ├── context/ │ ├── pages/ │ ├── App.jsx │ ├── main.jsx │ ├── index.css ├── public/ ├── package.json ├── vite.config.js

### Backend:
Backend/ ├── controllers/ ├── db/ ├── middlewares/ ├── models/ ├── routes/ ├── services/ ├── app.js ├── server.js ├── package.json

---

## Installation and Setup

### Prerequisites:
- Node.js
- MongoDB
- npm or yarn

### Backend Setup:
1. Navigate to the `Backend` directory:
   ```sh
   cd Backend
