
A full-stack CRM-style application currently in development. This repository contains the backend system with authentication, role-based access control, and lead management APIs.

---

## 📌 Current Status

### ✅ Backend Completed
- User Authentication (Register/Login)
- JWT Authentication
- Role-Based Access Control (Admin / Recruiter / Candidate)
- Lead Management System (CRUD)
- Lead Assignment System
- Dashboard Statistics API

### 🚧 Frontend (Coming Soon)
- React.js UI
- Login/Register Pages
- Dashboard UI
- Lead Management Interface
- Role-based UI rendering

---

## 🏗️ Tech Stack (Backend)

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt
- dotenv
- CORS

---

## 📁 Backend Structure


server/
│
├── models/
├── controllers/
├── routes/
├── middleware/
├── server.js
└── .env


---

## 🔐 API Endpoints

### Auth

POST /api/auth/register
POST /api/auth/login


### Leads

POST /api/leads
GET /api/leads
PUT /api/leads/:id
DELETE /api/leads/:id
PUT /api/leads/assign/:id


### Dashboard

GET /api/dashboard/stats


---

## 👤 Roles System

| Role       | Permissions |
|------------|------------|
| Admin      | Full access + assign leads |
| Recruiter  | Manage assigned leads |
| Candidate  | Limited access |

---

## 🎯 Project Goal

This project demonstrates:
- Full-stack CRM architecture
- Authentication & Authorization system
- Role-based backend logic
- Real-world API development
- Scalable project structure

---

## 🚀 Upcoming Improvements

- Frontend React application
- UI dashboard for leads
- Role-based UI rendering
- Deployment (Render + Vercel)

---

## 👨‍💻 Author

Paraj Mandal
Full Stack Developer (Internship Project)