# digital-menu-ordering-pos-system
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for restaurants to manage digital table menus, QR-based ordering, real-time table bookings, and automated billing — with a separate admin dashboard for full control. included KDS screen

# 🍽️ Restaurant Digital System

A full-featured **MERN stack** application for restaurants to manage:

- QR-based digital table menus  
- Real-time table-based ordering  
- Kitchen & admin-side order tracking  
- Automated billing and payments  
- Admin dashboard for full system control

---

## 🚀 Tech Stack

**Frontend:**  
- React.js  
- React Router  
- Axios  
- Context API / Zustand (optional)  
- Tailwind CSS or Bootstrap

**Backend:**  
- Node.js  
- Express.js  
- MongoDB (Mongoose)  
- JWT Auth  
- Dotenv

---

## 📁 Project Structure

restaurant-digital-system/
├── client/ # React frontend
└── server/ # Express backend


## 🎯 Features

### 👥 Customer (via QR)
- Scan QR to access `/table/:id`
- Browse dynamic digital menu
- Add items to cart
- Place table-specific order
- View order status in real-time

### 🧑‍🍳 Staff / Kitchen
- View live order queue
- Update order status to "preparing", "served", etc.

### 🧾 Billing
- Generate bill for completed orders
- Tax and total auto-calculated
- Print/download support

### 🛠️ Admin Dashboard
- Manage tables
- Add/edit/remove menu items
- View all orders & bills
- View analytics (optional)


## 📦 Installation

### 1. Clone Repository

git clone https://github.com/yourusername/restaurant-digital-system.git
cd restaurant-digital-system


▶️ Run Locally

cd server
npm run dev

cd client
npm run dev


👨‍💻 Author
Mohamed Munshif AK
Front-end & MERN Stack Developer
📍 Kerala, India
