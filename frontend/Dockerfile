# Use the official Node.js image as base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the frontend code into the container
COPY frontend/ .

# Install Node.js dependencies
RUN npm install

# Expose the port that React will be running on
EXPOSE 3000

# Command to start the React application
CMD ["npm", "start"]