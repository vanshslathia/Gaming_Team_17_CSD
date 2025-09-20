@echo off
echo ========================================
echo    Game Store - MongoDB Atlas Setup
echo ========================================
echo.

echo Step 1: Please update your MongoDB Atlas connection string
echo.
echo 1. Go to https://www.mongodb.com/atlas
echo 2. Click "Connect" on your cluster
echo 3. Choose "Connect your application"
echo 4. Select "Node.js" and version "4.1 or later"
echo 5. Copy the connection string
echo 6. Replace YOUR_CONNECTION_STRING in application-atlas.properties
echo.

echo Example connection string format:
echo mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/game_club?retryWrites=true^&w=majority
echo.

echo Step 2: Make sure to add your IP address to Atlas Network Access
echo.

pause

echo Starting the application...
echo.

cd /d "%~dp0server"
mvn spring-boot:run -Dspring.profiles.active=atlas

pause
