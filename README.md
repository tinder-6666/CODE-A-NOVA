# CODE-A-NOVA Backend Project

## Features
- User Registration API
- Login API
- Password Hashing using bcrypt
- JWT Authentication
- MongoDB Database Integration

## Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcryptjs
- jsonwebtoken

## API Endpoints

### Register User
POST /api/users/register

Body:
```json
{
  "name": "Ajay",
  "email": "ajay@gmail.com",
  "password": "123456"
}
```

### Login User
POST /api/users/login

Body:
```json
{
  "email": "ajay@gmail.com",
  "password": "123456"
}
```
