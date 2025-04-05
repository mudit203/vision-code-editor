# Vision-Code-Editor

A React-based application showcasing Gemini AI capabilities with writing Code using voice, vision, share screen.

## Features

- Real-time fluid simulation visualization
- File reading and modification API
- React-based UI with TypeScript support
- Express backend server

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
npm install
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
├── server/              # Express backend server
│   └── server.ts        # Server implementation
├── src/                 # Source files
│   ├── components/      # React components
│   ├── contexts/        # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── fluid.js        # Fluid simulation implementation
```

## API Endpoints

- `GET /api/file` - Read file contents
- `POST /api/file` - Modify file contents

