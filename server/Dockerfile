# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the package.json and install dependencies
COPY . .

RUN npm install

# Copy the CORS proxy server file
COPY cors-proxy-server.js .

# Expose the port
EXPOSE 8082

# Start the CORS proxy server
CMD ["npm", "start"]
