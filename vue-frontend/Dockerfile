# Step 1: Build Stage
FROM node:23-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install

# Copy project files and build
COPY . .
RUN yarn build

# Step 2: Production Stage (using NGINX)
FROM nginx:stable-alpine

# Copy built assets from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Optional: Copy custom NGINX config (if you have one)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
