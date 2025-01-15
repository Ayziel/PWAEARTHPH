# Use Node.js as the base image
FROM node:16-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./ 

# Install dependencies (use 'npm ci' for a faster and more reliable install)
RUN npm ci

# Install dotenv explicitly if needed (can be added in package.json dependencies instead)
RUN npm install dotenv

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on
EXPOSE 6052

# Command to start the app
CMD ["npm", "start"]
