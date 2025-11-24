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

# Tell Next.js which port to use
ENV PORT=8080

# Expose container port
EXPOSE 8080

# Start Next.js production server
CMD ["npm", "run", "start"]
