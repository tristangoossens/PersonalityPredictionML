# Get the nodejs image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy everything from the current directory to the working directory
COPY . .

# Install the dependencies
RUN yarn install

# Expose the port
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]