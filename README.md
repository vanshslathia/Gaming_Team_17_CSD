# Game App Client

## Overview

The client-side of the Game App, built using [React](https://reactjs.org/) and [Redux](https://redux.js.org/). This application allows users to interact with the gaming platform, view available games, and manage their profiles.

## Features..

- User authentication and profile management
- Game browsing and search functionality
- Real-time notifications and updates
- Responsive design for mobile and desktop

## Installation

### Prerequisites required

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/vanshslathia/Gaming_Team_17_CSD.git
   cd Gaming_Team_17_CSD/Game\ App/client

# 🎮 Game App Server

## 📖 Project Overview ,
The Game App Server powers the backend of our gaming platform.  
It provides secure APIs for user management, game listings, and real-time features.  
The server is built with **Node.js**, **Express**, and integrates with **MongoDB Atlas** for data storage.

---

## 🖥️ Tech Stack
- **Backend Framework**: Node.js, Express.js  
- **Database**: MongoDB Atlas (with Mongoose)  
- **Authentication**: JWT (JSON Web Tokens)  
- **Environment Variables**: dotenv  
- **Utilities**: Nodemon for development, CORS for cross-origin access  

---

## 🔄 API Flow
1. **Client Request**: The client sends a request (e.g., Login, Fetch Games).  
2. **Middleware Check**: Authentication middleware verifies tokens if required.  
3. **Controller Logic**: Business logic executes (e.g., fetch data from DB).  
4. **Database Interaction**: MongoDB handles all persistent storage needs.  
5. **Response**: Server sends JSON response back to the client.  

---

## 🧪 Example API Usage

### Fetch All Games
```http
GET /api/games



