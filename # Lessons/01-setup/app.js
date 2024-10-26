/*
  What
  - airbnb -> network tab -> headers -> server: nginx
  - serve web content to browser -> server

\\\\\\\\\\\\\\\\\\\\

  browser <-> server
  browser <-> NginX <-> Multiple Servers
  -> browser needs to go through Nginx -> reverse proxy
  -> in this case -> nginx acts as a load balancer
  -> nginx handles encryption as well -> instead of having encryptions in each server -> we just need to use nginx to handle it


\\\\\\\\\\\\\\\\\\\\\

  Installation
  - https://nginx.org/en/download.html
    -> zip file
  🌲 the only file the we want to care is conf/nginx.conf -> to config reverse proxy


\\\\\\\\\\\\\\\\\\\\\

  Locations
  - Linux Server: /usr/local/nginx/conf /etc/nginx, or /usr/local/etc/nginx


\\\\\\\\\\\\\\\\\\\\\

  Path
  - Environment Path: D:\Coding\DevOps\nginx-tutorial\playground\nginx
  - after add path -> run "nginx -t" to test


\\\\\\\\\\\\\\\\\\\\\

  Start Server
  - <start> -> nginx
  - <stop> -> nginx -s stop
  - <reload> -> nginx -s reload
  - complete stop nginx -> taskkill /f /IM nginx.exe
  - go to http://localhost:80/ or http://localhost


\\\\\\\\\\\\\\\\\\\\\

  nginx.conf
  - each line of code is key value pair
    -> directive
    -> ex: worker_processes  1;

  - context
    -> events {}
    -> contains directives





*/
