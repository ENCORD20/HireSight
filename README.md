# HireSight

A lightweight React/Vite application for uploading and scoring resumes.  
Built with React Router, TypeScript, and TailwindCSS.

## Features

- Upload PDF resumes
- Visual score badges and gauges
- Simple navigational layout
- Docker-ready

## Getting Started

```bash
npm install
npm run dev
```

Navigate to `http://localhost:5173` in your browser.

## Build

```bash
npm run build
```

## Docker

```bash
docker build -t hiresight .
docker run -p 3000:3000 hiresight
```

## License

[MIT](LICENSE)
