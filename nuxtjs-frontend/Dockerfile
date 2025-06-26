# Step 1: Build stage
FROM node:23-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the Nuxt app
RUN yarn build

# Step 2: Production runtime stage
FROM node:23-alpine AS runner

WORKDIR /app

# Copy production build from builder
COPY --from=builder /app/.output ./.output

# Expose Nuxt's default production port
EXPOSE 3000

# Start Nuxt app in production
CMD ["node", ".output/server/index.mjs"]
