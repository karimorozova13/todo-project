# Step 1: Build Stage
FROM node:23-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy project files
COPY . .

# Build Next.js app
RUN yarn build

# Step 2: Production Stage
FROM node:23-alpine AS runner

# Set environment variables for Next.js production
ENV NODE_ENV=production

# Set working directory
WORKDIR /app

# Copy built app from builder stage
# COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose port 3000
EXPOSE 3000

# Start Next.js app
CMD ["yarn", "start"]
