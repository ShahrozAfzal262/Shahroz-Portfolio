# Shahroz Portfolio

Full Stack MERN portfolio for Shahroz Afzal.

## Run frontend

```powershell
cd frontend
npm install
npm run dev
```

## Run backend

```powershell
cd backend
npm install
npm run dev
```

## Configure contact form email

The contact form sends submissions to `shahrozafzal262@gmail.com` through the backend. Add the email settings below to your existing `backend/.env`, keeping its current `MONGO_URI` value:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
FRONTEND_URL=http://localhost:5173
CONTACT_EMAIL=shahrozafzal262@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your_gmail_address
SMTP_PASS=your_16_character_google_app_password
```

For Gmail, enable 2-Step Verification and create an App Password for `SMTP_PASS`; do not use your regular Gmail password. Keep `.env` private and never commit it. The contact endpoint is `POST /api/contact`, and submissions are stored in MongoDB and emailed to `CONTACT_EMAIL`.

When deploying, set `FRONTEND_URL` to the deployed frontend origin and set `VITE_API_URL` in the frontend build environment to the backend base URL (for example, `https://api.example.com`).
