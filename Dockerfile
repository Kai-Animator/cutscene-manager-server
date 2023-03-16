# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install the dependencies
RUN npm install --production

# Copy the rest of the application files to the container
COPY . .
COPY package*.json ./

# Expose port 80 and 443 for external access
EXPOSE 80

# Set environment variables for the PostgreSQL database
ENV DB_USER=niidl
ENV DB_PASSWORD=testPassword
ENV DB_NAME=smile_cutscene
ENV DB_HOST=localhost

  # Run the Knex database migrations
  CMD npm run migrate && \
  # Seed the database with initial data
  npm run seed && \
  # Start the Express server
  npm run start

