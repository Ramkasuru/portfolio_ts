# Use official Node image
FROM node:20-alpine

WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

RUN npm install

# Copy rest of the project
COPY . .

# Build Next.js
RUN npm run build

# Tell Next.js which port to use and to bind to all interfaces
ENV PORT=8080
ENV HOSTNAME=0.0.0.0

# Expose container port
EXPOSE 8080

# Start Next.js production server
CMD ["npm", "run", "start"]
