# A2Z-recipes

A2Z-recipes is a full-stack application with a **React frontend** and an **Express.js backend**. This README provides step-by-step instructions for local development, deployment on **Render**, and troubleshooting common issues.

---

## 📌 Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Prerequisites](#prerequisites)
- [Local Development Setup](#local-development-setup)
  - [Cloning the Repository](#cloning-the-repository)
  - [Installing Dependencies](#installing-dependencies)
  - [Setting Up Environment Variables](#setting-up-environment-variables)
  - [Running Locally](#running-locally)
- [Testing](#testing)
- [Deployment on Render](#deployment-on-render)
  - [Deploying the Backend](#deploying-the-backend)
  - [Deploying the Frontend](#deploying-the-frontend)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## 🌍 Overview

Mixup-Final is a **Recipe Sharing Platform** where users can:
✅ Browse, create, and share recipes
✅ Save favorite recipes
✅ Get real-time updates

Built using:
- **Frontend:** React, React Router
- **Backend:** Express.js, MongoDB
- **Hosting:** Render

---

## 📁 Repository Structure

```
mixup-final/
├── server/                  # Backend (Node.js + Express.js)
│   ├── package.json         # Dependencies
│   ├── app.js               # Main server file
│   ├── .env.example         # Sample environment variables
├── client/                  # Frontend (React.js)
│   ├── package.json         # Dependencies
│   ├── public/
│   ├── src/
│   ├── README.md
└── README.md                # This file
```

---

## ⚙️ Prerequisites

Before you begin, make sure you have:
- **Git** installed ✅
- **Node.js (v16+ recommended)** ✅
- **npm or yarn** ✅
- **Render account** (for deployment) ✅

---

## 🛠 Local Development Setup

### 📥 Cloning the Repository

```bash
git clone https://github.com/your-username/mixup-final.git
cd mixup-final
```

### 📦 Installing Dependencies

#### Backend (Server)
```bash
cd server
npm install
```

#### Frontend (Client)
```bash
cd ../client
npm install
```

### 🔑 Setting Up Environment Variables

1. Create a `.env` file in the `server/` directory.
2. Copy the contents from `.env.example` and update the values.
   - Example:
   ```env
   PORT=5000
   MONGO_URI=your_database_url
   ````

### 🚀 Running Locally

#### Start the Backend (Express.js)
```bash
cd server
npm start
```
- Runs on: `http://localhost:5000`

#### Start the Frontend (React.js)
```bash
cd client
npm start
```
- Runs on: `http://localhost:3000`

---

## 🧪 Testing

- **Backend API:** Use Postman or `curl` to test API endpoints.
- **Frontend Testing:** Open the browser and interact with the UI.
- **Automated Tests:** Run tests if available:
  ```bash
  npm test
  ```

---

## 🚀 Deployment on Render

### 🌐 Deploying the Backend

1. **Login to Render** and create a **New Web Service**.
2. Connect your **GitHub repository**.
3. Configure:
   - **Branch:** `main`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Environment Variables:** Add as needed.
4. Click **Deploy**.

### 🌐 Deploying the Frontend

1. **Create a New Static Site** in Render.
2. Connect the **GitHub repository**.
3. Configure:
   - **Root Directory:** `client`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `client/build`
4. Click **Deploy**.

---

## 🔧 Troubleshooting

### ❌ Git Errors

- **Error: `remote origin already exists`**
  ```bash
  git remote remove origin
  git remote add origin <your-repo-url>
  ```

- **Error: `Permission denied (publickey).`**
  ```bash
  ssh -T git@github.com
  ```
  If SSH fails, switch to HTTPS:
  ```bash
  git remote set-url origin https://github.com/your-username/mixup-final.git
  ```

### ❌ Common Render Deployment Issues

- **Build Fails?**
  - Check logs in **Render Dashboard > Logs**.
  - Ensure all **environment variables** are correctly set.
  - Try `npm install` locally to catch issues before deploying.

- **Frontend Not Loading?**
  - Check if API endpoint is correct (`.env` settings for `REACT_APP_API_URL`).

---

## 🤝 Contributing

🚀 **Want to contribute?** Follow these steps:
1. Fork the repository 🍴
2. Create a new branch `git checkout -b feature-branch` 🌱
3. Commit your changes `git commit -m "Added new feature"` 📌
4. Push and create a PR `git push origin feature-branch` 🚀

---

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 **Happy coding & sharing recipes!** 🍽️🔥

