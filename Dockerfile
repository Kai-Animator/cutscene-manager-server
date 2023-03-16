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

# Expose port 80 and 443 for external access
EXPOSE 80

# Set environment variables for the PostgreSQL database
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=admin
ENV POSTGRES_DB=smile_cutscene
ENV POSTGRES_HOST=localhost

# Install PostgreSQL and create the database
RUN apt-get update && \
    apt-get install -y postgresql && \
    apt-get clean && \
    service postgresql start && \
    su postgres -c "psql -c 'CREATE DATABASE smile_cutscene;'"

# Start the PostgreSQL database and wait for it to start
CMD service postgresql start && sleep 5 && \
  # Run the Knex database migrations
  npm run migrate && \
  # Seed the database with initial data
  npm run seed && \
  # Start the Express server
  npm run start

