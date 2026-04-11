# 🚀 Trading App — Real-Time Full Stack Trading Platform

## 📌 Overview

A full-stack trading application that simulates a real-world stock trading environment. Users can track market data, execute trades, and manage their portfolio in real time.

The application also includes a **personalized email system** that sends a welcome email upon user registration, mimicking real-world SaaS onboarding flows.

---

## ✨ Features

- 📊 Real-time market simulation  
- 🔐 JWT-based authentication  
- ⚡ Live updates using WebSockets (Socket.io)  
- 📧 Personalized welcome email on signup
- Regular personalised stock Updates 

---

## 🧠 How It Works

User registers → Account created → Email triggered  
User logs in → Fetch portfolio → Creates Watchlist  
See real time updates for thier favourite stocks → UI updates in real-time  

---

## 🏗️ Tech Stack

### Frontend
- Next.js
### Backend
- Next.js
### Database
- MongoDB   

### Real-Time
- Socket.io  

### Email Service
- Nodemailer 
---

## 📂 Project Structure

trading-app/
│
├── client/          
├── server/          
├── controllers/     
├── models/          
├── routes/          
├── utils/           
└── .env             

---

## ⚙️ Installation & Setup

### 1. Clone the repository

git clone https://github.com/your-username/trading-app.git  
cd trading-app  

### 2. Install dependencies

npm install  

### 3. Setup environment variables

Create a `.env` file:

PORT=5000  
MONGODB_URI=your_database_url  
JWT_SECRET=your_secret_key  

EMAIL_USER=your_email  
EMAIL_PASS=your_password  

### 4. Run the application

npm run dev  

---

## 📧 Email Workflow

Trigger: User registration  
Action: Send personalized welcome email  
Content: User name + onboarding message  

Signup → Backend event → Email service → User inbox  

---

## 🚀 Future Improvements

- 📊 Advanced charts  
- 🔔 Trade alerts via email    
- 📱 Mobile app  

---

## 🧠 Learnings

- Real-time systems using WebSockets  
- Event-driven email workflows  
- Scalable backend architecture  
- State management  
- Trading logic simulation  

---

## 🌍 Live Demo

https://trading-eosin.vercel.app/sign-up

---

## 📸 Screenshots

<img width="1365" height="652" alt="image" src="https://github.com/user-attachments/assets/566c2c73-aefd-4553-86ca-aa9a058e3d22" />


---

## 🤝 Contributing

Contributions are welcome. Fork and submit a PR.

---

## 📜 License

MIT License  

---

## 💡 Author

Mehtaab Aalam  
GitHub: https://github.com/Mehtaab11  
LinkedIn: https://linkedin.com/in/mehtaabaalam  

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
