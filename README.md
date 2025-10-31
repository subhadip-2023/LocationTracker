# Real-Time Location Tracker 🚀

A real-time location tracking application built using **Node.js**, **Express**, **Socket.IO**, and **Leaflet.js**.  
It captures the user's live location via the browser's Geolocation API and shows it on an interactive map.

---

## ✨ Features

- 📍 Live GPS location tracking in browser
- 🌍 Interactive map with Leaflet.js
- 🔄 Real-time updates using Socket.IO
- ⚡ Lightweight Node.js backend
- 🗺️ OpenStreetMap tile layer

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
Node.js | Backend runtime  
Express.js | Server framework  
Socket.IO | Real-time communication  
Leaflet.js | Map rendering  
OpenStreetMap | Map tiles  
HTML/CSS/JS | Frontend  

---

## 📂 Folder Structure

project/
├── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── script.js
├── views/
│ └── index.ejs
├── app.js
└── package.json


---

## 🚀 Run Locally

### 1️⃣ Clone repo

```bash
git clone (https://github.com/subhadip-2023/LocationTracker.git)
cd LocationTracker

2️⃣ Install dependencies
npm install

3️⃣ Start server
node app.js

4️⃣ Visit in browser
http://localhost:3000/

🔧 Environment
Browser must allow GPS location access.
If denied → map won't update.

