# explore-next-js

A personal project for exploring Next.js App Router features hands-on — routing, layouts, data fetching, Suspense, and more.

## Tech Stack

- **Next.js** (App Router)
- **Tailwind CSS v4**
- **DaisyUI**
- **Geist Font** (by Vercel)

## Project Structure

```
app/
├── about/
│   └── page.jsx               # About page with Next.js Image component
├── blogs/
│   ├── page.jsx               # Blog listing with static data
│   └── [blogId]/
│       └── page.jsx           # Dynamic blog details page
├── contact/
│   └── page.jsx
├── dashboard/
│   ├── layout.jsx             # Nested layout with DaisyUI drawer sidebar
│   ├── page.jsx
│   ├── profile/
│   │   └── page.jsx
│   └── about/
│       └── page.jsx
├── developers/
│   └── page.jsx
├── users/
│   └── page.jsx               # Suspense-based data fetching
├── User/
│   └── page.jsx               # User list rendered after promise resolves
├── Component/
│   └── Navbar/
│       └── Navbar.js
├── error.jsx                  # Global error boundary (client component)
├── globals.css
├── layout.js                  # Root layout
└── page.js                    # Home page
```

## Features Explored

| Feature | Where |
|---|---|
| App Router & file-based routing | All pages |
| Nested layouts | `dashboard/layout.jsx` |
| Dynamic routes | `blogs/[blogId]/page.jsx` |
| `next/image` | `about/page.jsx` |
| `next/link` | `blogs/page.jsx`, `dashboard/layout.jsx` |
| Per-page metadata | Most pages |
| Suspense + async data fetching | `users/page.jsx` |
| Error boundary | `error.jsx` |
| DaisyUI drawer sidebar | `dashboard/layout.jsx` |
| External API fetch | JSONPlaceholder `/users` |

## Routes

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About page |
| `/blogs` | Blog listing |
| `/blogs/:blogId` | Individual blog details |
| `/contact` | Contact page |
| `/developers` | Developers page |
| `/users` | Users fetched from JSONPlaceholder API |
| `/dashboard` | Dashboard with sidebar layout |
| `/dashboard/profile` | Profile page |
| `/dashboard/about` | About (inside dashboard) |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

> This is a learning/exploration project, not intended for production.