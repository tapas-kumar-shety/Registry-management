FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
# RUN npm install --production
RUN npm install --production --legacy-peer-deps


# Copy the rest of the app source
COPY . .

# Expose port (adjust if your app uses another)
EXPOSE 5000

# Start the app
CMD ["npm", "start"]