# Build Stage
FROM node:23-alpine AS build

WORKDIR /app

# Copy project files
COPY . .

# Install dependencies with Yarn
RUN yarn install

# Build production assets
RUN yarn build

# Production Stage
FROM nginx:stable-alpine

# Copy build output to NGINX public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
