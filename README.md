# Fullstack Frontend & Backend Monorepo with Docker

This monorepo contains multiple frontend and backend applications built with modern frameworks (React, Next.js, Vue, Nuxt.js, Angular) and Node.js server-side apps. Each is containerized with Docker for easy development, deployment, and production builds.

---

## Project Structure

```

todo-project/
├── react-frontend/          # React app (styled-components)
├── nextjs-frontend/          # Next.js app (Tailwind CSS)
├── vue-frontend/             # Vue 3 + Vite app (SCSS)
├── nuxtjs-frontend/          # Nuxt 3 app (SCSS)
├── angular-frontend/         # Angular app (client-side)
├── angular-server-side/      # Angular Universal (SSR)
└── main-server/              # Node.js / Express backend API

```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (for local builds or testing if needed)
- [Docker](https://www.docker.com/) installed and running
- Open ports: Make sure the following ports are free on your local machine:
  - `3000`, `3001`, `3002`, `3003`, `4200`.

---

## Running Each App in Docker

Below are detailed Docker build and run instructions for each folder.

---

### 🟦 React Frontend (styled-components) (Port: `3001`)

#### Build Docker image:

```bash
cd react-frontend
docker build -t react-frontend-app .
```

#### Run container:

```bash
docker run -p 3001:3000 react-frontend-app
```

#### Access:

```
http://localhost:3001
```

---

### 🟦 Next.js Frontend (Tailwind CSS) (Port: `3000`)

#### Build Docker image:

```bash
cd nextjs-frontend
docker build -t nextjs-frontend-app .
```

#### Run container:

```bash
docker run -p 3000:3000 nextjs-frontend-app
```

#### Access:

```
http://localhost:3000
```

---

### 🟩 Vue Frontend (SCSS + Vite) (Port: `3000`)

#### Build Docker image:

```bash
cd vue-frontend
docker build -t vue-frontend-app .
```

#### Run container:

```bash
docker run -p 3000:80 vue-frontend-app
```

#### Access:

```
http://localhost:3000
```

---

### 🟨 Nuxt 3 Frontend (SCSS) (Port: `3002`)

#### Build Docker image:

```bash
cd nuxtjs-frontend
docker build -t nuxtjs-frontend-app .
```

#### Run container:

```bash
docker run -p 3002:3000 nuxtjs-frontend-app
```

#### Access:

```
http://localhost:3002
```

---

### 🟥 Angular Frontend (Port: `4200`)

> ⚠️ Make sure your Angular `outputPath` in `angular.json` matches what your Dockerfile copies (typically `/dist/angular-frontend`).

#### Build Docker image:

```bash
cd angular-frontend
docker build -t angular-frontend-app .
```

#### Run container:

```bash
docker run -p 4200:80 angular-frontend-app
```

#### Access:

```
http://localhost:4200
```
