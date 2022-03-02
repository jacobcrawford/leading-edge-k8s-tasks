
FROM node:16.14.0-slim

RUN mkdir app
WORKDIR app

RUN npm i express
COPY . .
# Exposes port 8000 outside the docker container
EXPOSE 8000  
# Provides the command required to run the application
CMD ["node", "/app/server.js"] 
