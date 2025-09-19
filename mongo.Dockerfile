# Use official MongoDB base image
FROM mongo:7.0

# Set environment variables for root user
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=admin123
ENV MONGO_INITDB_DATABASE=librarydb

# Copy initialization scripts (optional)
# Any .js or .sh file inside /docker-entrypoint-initdb.d/ will be executed
COPY ./init-mongo.js /docker-entrypoint-initdb.d/

# Expose default MongoDB port
EXPOSE 27017
