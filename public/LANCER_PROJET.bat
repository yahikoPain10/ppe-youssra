@echo off
setlocal
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js n'est pas installe sur cet ordinateur.
  echo.
  echo Installe Node.js, puis relance ce fichier.
  echo Site officiel : https://nodejs.org/
  echo.
  pause
  exit /b 1
)

if "%PORT%"=="" set PORT=3000

echo Lancement du projet EPI...
echo Adresse : http://localhost:%PORT%
echo.
echo Garde cette fenetre ouverte tant que tu utilises le site.
echo Pour arreter le serveur : CTRL + C
echo.

start "" cmd /c "timeout /t 2 >nul & start http://localhost:%PORT%"
node server.js

echo.
echo Le serveur s'est arrete.
pause
