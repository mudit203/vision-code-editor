# VOXIDE: Vision-Code-Editor

A Web-based application showcasing Gemini AI capabilities with writing Code using voice, vision, share screen.
Effortlessly edit code using your voice with advanced audio commands. No need to type—just open a file and start speaking your instructions. Code faster, smarter, and hands-free with voice-powered development.

## Features

- Voice and Vision Integration
- File management API
- Real Time Collaboration
- Integrated real time error detection

## Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

## Setup

1. Clone the repository:
```sh
git clone <repository-url>
cd vision-code-editor
```

2. Install dependencies:
```sh
npm install --force (or update next.js or add react-router-dom)
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```
REACT_APP_GEMINI_API_KEY=your_api_key_here
```

## Running the Application

1. Start the backend server:
```sh
node server/dist/server.js
```
The server will run on port 3001.

2. In a new terminal, start the React frontend:
```sh
npm start
```
The application will open in your browser at http://localhost:3000

## Project Structure
```
├── public/               # Static files
│   ├── favicon.ico       # Favicon
│   ├── [index.html](http://_vscodecontentref_/2)        # HTML template
│   └── robots.txt        # Robots.txt file
├── server/               # Express backend server
│   ├── server.ts         # Server implementation
│   └── [tsconfig.json](http://_vscodecontentref_/3)     # TypeScript configuration for the server
├── src/                  # Source files
│   ├── App.scss          # Global styles
│   ├── App.test.tsx      # App tests
│   ├── App.tsx           # Main React component
│   ├── index.css         # Global CSS
│   ├── index.tsx         # React entry point
│   ├── components/       # React components
│   │   ├── altair/       # Altair component for AI interactions
│   │   ├── audio-pulse/  # Audio visualization components
│   │   ├── control-tray/ # Control tray UI
│   │   ├── homepage/     # Homepage components
│   │   ├── logger/       # Logging components
│   │   └── side-panel/   # Side panel UI
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions and API integrations
│   ├── multimodal-live-types.ts # Type definitions for multimodal interactions
│   ├── reportWebVitals.ts # Web vitals reporting
│   └── setupTests.ts     # Test setup
├── .env                  # Environment variables
├── .gitignore            # Git ignore file
├── LICENSE               # License file
├── [package.json](http://_vscodecontentref_/4)          # Project dependencies and scripts
├── [README.md](http://_vscodecontentref_/5)             # Project documentation
├── [tailwind.config.js](http://_vscodecontentref_/6)    # Tailwind CSS configuration
├── [tsconfig.json](http://_vscodecontentref_/7)         # TypeScript configuration
└── [upgrade-deps.sh](http://_vscodecontentref_/8)       # Dependency upgrade script
```

## API Endpoints

- `GET /api/file` - Read file contents
- `POST /api/file` - Modify file contents

## Demo
[Watch the demo video](https://youtu.be/M7i5YU08m9I)
