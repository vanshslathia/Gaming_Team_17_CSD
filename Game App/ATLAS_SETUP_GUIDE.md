# 🚀 Game Store - MongoDB Atlas Setup Guide

## Quick Setup Steps

### 1. Get Your MongoDB Atlas Connection String

1. **Go to [MongoDB Atlas](https://www.mongodb.com/atlas)**
2. **Sign in to your account**
3. **Click "Connect" on your cluster**
4. **Choose "Connect your application"**
5. **Select "Node.js" and version "4.1 or later"**
6. **Copy the connection string**

### 2. Update Configuration

1. **Open:** `c:\Game App\server\application-atlas.properties`
2. **Replace:** `YOUR_CONNECTION_STRING` with your actual connection string
3. **Make sure to add:** `/game_club` at the end of the connection string

**Example:**
```
spring.data.mongodb.uri=mongodb+srv://myuser:mypassword@cluster0.abc123.mongodb.net/game_club?retryWrites=true&w=majority
```

### 3. Configure Atlas Security

1. **Go to "Network Access" in Atlas**
2. **Add your current IP address** to the whitelist
3. **Or add `0.0.0.0/0`** for all IPs (easier for testing)

### 4. Run the Application

**Option A: Use the setup script**
```bash
# Double-click setup-atlas.bat
```

**Option B: Manual commands**
```bash
# Terminal 1 - Backend
cd "c:\Game App\server"
mvn spring-boot:run -Dspring.profiles.active=atlas

# Terminal 2 - Frontend
cd "c:\Game App\client"
npm run dev
```

### 5. Access Your Game Store

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:8080
- **API Documentation:** http://localhost:8080/swagger-ui.html

## Troubleshooting

### Connection Issues
- Check your IP is whitelisted in Atlas
- Verify the connection string format
- Ensure database user has read/write permissions

### CORS Issues
- The server is configured to allow requests from localhost:5173
- Make sure both frontend and backend are running

### Sample Data
- The application will automatically load sample games on first run
- You can add, edit, and delete games through the interface

## Success Indicators
✅ Console shows "Connected to MongoDB Atlas"
✅ Frontend loads at http://localhost:5173
✅ Games are displayed in the interface
✅ No connection errors in console

---
**Need Help?** Check the console output for any error messages.
