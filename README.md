## Docker quick start

### Prerequisites
- Docker Desktop + Docker Compose v2

### 1) Create env file (do not commit secrets)

Copy `env.example` to `.env` at repo root and fill required values:
- **Required**: `DATABASE_URL`
- **Email**: `EMAIL_USER`, `EMAIL_PASS`
- **Google**: `GOOGLE_SERVICE_ACCOUNT_PATH` (mount file), `GOOGLE_DRIVE_FOLDER_ID` (if upload enabled)

> Note: This workspace blocks creating dotfiles via tool automation, but locally you can create `.env` normally.

### 2) (Optional) Provide Google service account JSON

Put your service account JSON at `./secrets/service-account.json` (DO NOT COMMIT), then in `docker-compose.yml` uncomment:
- the volume mount to `/run/secrets/google-service-account.json:ro`
- ensure `.env` has `GOOGLE_SERVICE_ACCOUNT_PATH=/run/secrets/google-service-account.json`

### 3) Build & run

From repo root:

```bash
docker compose config
docker compose build
docker compose up -d
docker compose ps
```

Health check:

```bash
curl http://localhost:3000/health
```

Open UI:
- Frontend: `http://localhost:8080`
- Backend: `http://localhost:3000`

### Notes (Worker / Playwright / Gemini login)
- Worker persists Chrome profile in docker volume `gemini-profile-data` → giữ session đăng nhập.
- Mặc định worker chạy **headless** (`PLAYWRIGHT_HEADLESS=true`). Nếu cần login tương tác, set `PLAYWRIGHT_HEADLESS=false` và chạy worker foreground để quan sát log.
- Trong container nên để `PLAYWRIGHT_CHANNEL` rỗng (dùng Chromium bundled). `channel=chrome` thường fail nếu image không cài Chrome.

### Volumes
- **PDF output**: persisted in volume `backend-reports` (mapped to `/app/assets/reports`).
- **Gemini profile**: persisted in volume `gemini-profile-data` (mapped to `/app/gemini-profile-data`).

### Troubleshooting
- **Frontend gọi API**: Trong Docker, nginx reverse proxy `/api` → backend, nên `VITE_API_BASE_URL` có thể để trống. Khi dev không docker, set `VITE_API_BASE_URL=http://localhost:3000` (xem `frontend/env.example`).
- **Email không gửi**: kiểm tra `EMAIL_USER/EMAIL_PASS` (Gmail App Password) và log warning trong backend/worker.
- **Google Sheet/Drive lỗi creds**: mount JSON và set `GOOGLE_SERVICE_ACCOUNT_PATH` đúng; nếu sai path bạn sẽ thấy warning từ `googleSheet.js`.

