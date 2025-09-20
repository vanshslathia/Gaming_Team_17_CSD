@echo off
echo ========================================
echo    Starting Game Store Application
echo ========================================
echo.

echo Starting Backend Server...
start "Backend Server" cmd /k "cd /d %~dp0server && mvn spring-boot:run -Dspring.profiles.active=atlas"

echo Waiting 10 seconds for backend to start...
timeout /t 10 /nobreak > nul

echo Starting Frontend Client...
start "Frontend Client" cmd /k "cd /d %~dp0client && npm run dev"

echo.
echo ========================================
echo    Game Store is starting up!
echo ========================================
echo.
echo Backend:  http://localhost:8080
echo Frontend: http://localhost:5173
echo.
echo Please wait for both services to fully start...
echo.

pause
