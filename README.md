# PetAdopt

A pet adoption web platform built as a university frontend project.

## Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite + TypeScript (TSX) |
| Routing | React Router v6 |
| Icons | @tabler/icons-react |
| CSS | CSS Modules + CSS Custom Properties |
| i18n | Custom LanguageContext (EN / SR) |
| Backend | Node.js + Express + TypeScript |
| Database | MongoDB + Mongoose |

## Project Structure

```
├── .github/
│   └── copilot-instructions.md   # Coding standards for Copilot
├── frontend/                      # React + Vite app
│   └── src/
│       ├── components/            # Shared UI, layout, filter components
│       ├── pages/                 # Home, Browse, PetDetail, Login, SignUp, Profile
│       ├── context/               # AuthContext, SavedContext, LanguageContext
│       ├── hooks/                 # useAuth, useSaved, useFilters, useLanguage
│       ├── i18n/                  # en.ts, sr.ts translation files
│       ├── data/                  # Mock pet data
│       ├── utils/                 # petHelpers label maps
│       ├── types/                 # Shared TypeScript interfaces
│       └── styles/                # globals.css, theme.css
├── backend/                       # Express API (structure only)
└── db/                            # MongoDB seeds & docs
```

## Running the Frontend

```bash
cd frontend
npm install
npm run dev
```

## Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Hero, features, featured pets |
| `/browse` | Browse | Search + filter all pets |
| `/pet/:id` | PetDetail | Full pet information |
| `/login` | Login | Email/password login |
| `/signup` | SignUp | Account registration |
| `/profile` | Profile | Saved pets & my listings |

## Language Toggle

Click the **EN / SR** button in the navbar to switch between English and Serbian.
