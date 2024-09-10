# Use the official Node.js image as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Install http-server globally to serve the static files
RUN npm install -g http-server

# Expose port 8080 to access the application
EXPOSE 8080

RUN chmod +x /app/replace-proxy-url.sh

# Command to run the application
#CMD ["http-server", "dist", "-p", "8080"]
CMD ["sh", "-c", "/app/replace-proxy-url.sh && http-server dist -p 8080"]
