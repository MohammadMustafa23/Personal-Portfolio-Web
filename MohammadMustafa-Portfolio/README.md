# Mohammad Mustafa — Developer Portfolio

A responsive, pixel-inspired developer portfolio built to present Mohammad Mustafa's work across full-stack web development, backend systems, Generative AI and practical software products.

The site is intentionally structured as a product experience rather than a generic template. It combines a dark green/cyan visual system, interactive navigation, animated pixel-art avatars, project case-study cards, a skills deck, a technical journey and a portfolio assistant.

## Live projects

- **[NewsMint — Live Demo](https://news-mint.vercel.app/)** · [Source code](https://github.com/MohammadMustafa23/NewsMint)
- **[HaqDar — Live Demo](https://haqdar-web.vercel.app/)** · [Source code](https://github.com/MohammadMustafa23/HaqDar-Web-App)
- **[UniFetch Media — Live Demo](https://unifetch-media.vercel.app/)** · [Source code](https://github.com/MohammadMustafa23/UniFetch-Media)

## About the portfolio

The portfolio represents Mohammad's current professional direction:

- Full-stack web development
- Backend and API engineering
- Generative AI and LLM-powered applications
- Automation and intelligent workflows
- Redis, caching and background processing
- Product-oriented engineering
- Production-minded system design

## Featured work

### NewsMint

A full-stack daily digest platform that collects articles from APIs and RSS feeds, removes duplicate information, generates concise English and Hindi summaries with Google Gemini, and delivers personalized, timezone-aware digests through Telegram.

The project includes authentication flows, user preferences, Redis caching, scheduled processing and notification delivery workflows.

### HaqDar

A government schemes finder that uses user eligibility profiles, embeddings, Pinecone semantic search and Gemini-powered ranking and explanations to surface relevant schemes.

The system uses MongoDB for persistence, Redis caching and separated service responsibilities to reduce repeated recommendation work.

### UniFetch Media

A personal media downloader built around URL detection, media previews, quality and format selection, background processing with yt-dlp and FFmpeg, and live progress updates through WebSockets.

### AI-Tester

An advanced project concept for AI-powered software testing and codebase intelligence. The planned system is designed to understand repository structure, dependencies, relationships, test requirements, execution results and change impact before producing evidence-based reports.

## Technology focus

### Languages and fundamentals

- C++
- JavaScript
- SQL
- HTML/CSS
- Object-oriented programming
- Data Structures and Algorithms
- Computer Networks
- Operating Systems

### Web and backend

- React.js
- Node.js
- Express.js
- MongoDB
- REST APIs
- Tailwind CSS

### AI and data

- Generative AI
- LangChain
- LangGraph
- RAG
- GraphDB

### Tools

- Git and GitHub
- Postman
- Visual Studio Code
- Docker
- GSAP

## Portfolio features

- Responsive React interface
- Dark pixel-inspired visual design
- Fixed animated pixel-art background
- First-load portfolio loader
- Scroll-aware navbar with section labels
- Animated developer avatar system
- Interactive portfolio bot with quick questions
- Project cards with live demo and source links
- Shuffleable skills deck
- Engineering journey section
- Verified resume snapshot
- GitHub, LinkedIn, GeeksforGeeks and email links
- Component-oriented source structure
- Separate data, animation and styling modules

## Getting started

### Requirements

- Node.js 18 or newer
- npm

### Installation

```bash
git clone <your-repository-url>
cd mohammad-mustafa-portfolio
npm install
```

### Start the development server

```bash
npm run dev
```

The development server runs on the Vite default port and is configured to accept external preview hosts.

### Create a production build

```bash
npm run build
```

### Preview the production build locally

```bash
npm run preview
```

## Project structure

```text
.
├── public/
│   ├── assets/
│   │   ├── avatars/
│   │   ├── MohammadMustafa_Resume.pdf
│   │   └── mustafa_green_pixel_background.png
│   └── favicon.ico
├── src/
│   ├── animations/          # GSAP and interaction helpers
│   ├── components/          # React page sections and reusable UI
│   ├── data/                # Projects, skills, journey and profile data
│   ├── hooks/               # Reusable React hooks
│   ├── styles/              # Component-oriented CSS
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## Updating portfolio content

Most public content is kept in small data modules so it can be updated without rewriting the layout:

- `src/data/projects.js` — project descriptions, tags and links
- `src/data/skills.js` — skills deck entries
- `src/data/journey.js` — engineering direction and milestones
- `src/data/achievements.js` — verified resume information
- `src/data/pixelAvatars.js` — avatar names and image paths

For a new project, update the project data first and add its verified live/repository URLs before making it public.

## Public profile links

- **GitHub:** [MohammadMustafa23](https://github.com/MohammadMustafa23)
- **LinkedIn:** [Mohammad Mustafa](https://www.linkedin.com/in/mohammad-mustafa9602a/)
- **GeeksforGeeks:** [Coding profile](https://www.geeksforgeeks.org/profile/ff774noe7)
- **Email:** mohammadmustafa.dev@gmail.com

## Resume

The current resume is available inside the site at:

```text
public/assets/MohammadMustafa_Resume.pdf
```

## Notes

- `node_modules/` and `dist/` are generated locally and should not be committed.
- Keep credentials, private environment variables and deployment secrets outside the repository.
- Use verified project URLs and factual profile information when updating public content.
