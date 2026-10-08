# ZapLink

ZapLink is an open-source URL shortener that makes it simple to turn long URLs into clean, memorable links. Easily create custom slugs, protect links with passwords or expiration dates, generate instant QR codes, and track visitor traffic in real time with built-in analytics.

## Features

- **Custom Links** — Custom slugs, password protection, and expiration dates.
- **Analytics** — Track clicks, referrers, devices, browsers, and countries in real time.
- **QR Codes** — Generate and download QR codes in SVG and PNG.
- **UTM Builder** — Add campaign parameters to shortened links.
- **REST API** — Create and manage links programmatically with API keys.

## Tech Stack

- **Framework**: Next.js 15, React 19
- **Database**: SQLite / PostgreSQL via Prisma
- **Styling**: Tailwind CSS
- **Auth**: NextAuth.js

## Getting Started

```bash
# Clone the repository
git clone https://github.com/VinayKrishna-7/ZapLink.git
cd ZapLink

# Install dependencies
npm install

# Configure environment
cp .env.example .env

# Initialize database
npm run db:push

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser and register your account at `/sign-up`. The first registered user is automatically assigned the `ADMIN` role.

## Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_APP_URL` | Base application URL | `http://localhost:3000` |
| `NEXTAUTH_SECRET` | Secret key for sessions | *(generate in .env)* |
| `DATABASE_URL` | Database connection string | `file:./dev.db` |
| `ADMIN_EMAIL` | Designated admin account (optional) | `""` |

## License

MIT
