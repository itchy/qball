@echo off
ping -n %1 127.0.0.1 > nul
start /B "" %2 %3
