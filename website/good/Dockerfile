# Get the nodejs image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy the package.json file
COPY ./good/package.json ./

# Install the dependencies
RUN npm install

# Copy everything from the current directory to the working directory
COPY ./good .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]