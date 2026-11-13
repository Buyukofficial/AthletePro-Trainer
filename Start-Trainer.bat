@echo off
title AthletePro Local Server
cd /d "%~dp0"
echo Starting AthletePro at http://127.0.0.1:9123 ...
start "" http://127.0.0.1:9123
python -m http.server 9123 --bind 127.0.0.1
pause
