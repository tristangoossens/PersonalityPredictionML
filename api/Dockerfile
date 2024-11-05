# Use the official Python image from the Docker Hub
FROM python:3.12

# Set the working directory in the container
WORKDIR /app

# Copy the required folders individually
COPY ./api /app/api
COPY ./data /app/data
COPY ./models /app/models

# Install dependencies
RUN pip install --no-cache-dir -r /app/api/requirements.txt

# Expose the port your app runs on (e.g., 8000 for FastAPI)
EXPOSE 8000

# Command to run the application
CMD ["uvicorn", "api.main:app", "--host", "0.0.0.0", "--port", "8000", "--reload"]