FROM node:20-alpine AS base

WORKDIR /app

# Backend API doesn't need Playwright browsers; keep image smaller & faster.
ENV NODE_ENV=production \
    PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY . .

RUN mkdir -p /app/assets/reports /app/gemini-profile-data

EXPOSE 3000

CMD ["node", "server.js"]

