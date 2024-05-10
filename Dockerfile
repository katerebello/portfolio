# Use the official Python image as the base image
FROM python:3.8

# Set the working directory in the container
WORKDIR /index.html

# Copy the application files into the working directory
COPY . /index.html


# Define the entry point for the container
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]