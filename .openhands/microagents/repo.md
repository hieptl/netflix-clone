---
name: Netflix Clone Repository Information
type: knowledge
version: 1.0.0
agent: CodeActAgent
triggers:
  - repo
---

# Netflix Clone Repository Information

This microagent provides comprehensive information about the Netflix Clone repository (hieptl/netflix-clone).

## Repository Overview

This is a **Netflix Clone** project built as an educational resource to demonstrate modern React development concepts and Firebase integration. The project serves as a comprehensive tutorial covering essential React concepts through building a Netflix-like streaming interface.

## Project Structure

```
netflix-clone/
├── README.md           # Comprehensive documentation and tutorial
├── data/              # Sample data and assets
├── source/            # Main React application source code
│   ├── package.json   # Dependencies and scripts
│   └── src/           # React components and application logic
└── ui/                # UI assets and design resources
```

## Technology Stack

- **Frontend Framework**: React 17.0.2
- **Routing**: React Router DOM 5.2.0
- **Backend/Database**: Firebase 8.6.3
- **Build Tool**: React Scripts 4.0.0
- **Language**: JavaScript (with TypeScript dev dependencies)

## Key Features & Components

The project includes several core components:
- **Header Component**: Netflix-style navigation header
- **Row Component**: Movie/show rows with horizontal scrolling
- **Home Component**: Main landing page
- **Login Component**: User authentication interface
- **Navigation Component**: Site navigation

## Learning Objectives

This repository covers the following React concepts:
- JSX syntax and React elements
- React components (functional and class-based)
- React Hooks (useState, useEffect)
- Props and state management
- Event handling and form processing
- Component communication
- React Router for navigation
- Firebase integration for data and authentication
- Deployment to Firebase hosting

## Course Structure

The project is organized as a 4-episode tutorial series:
1. **Episode 1**: Introduction, React elements/components, Header component
2. **Episode 2**: Row component, Firebase data fetching, useEffect and useState
3. **Episode 3**: React Router implementation, Sign In page creation
4. **Episode 4**: Knowledge summary and Firebase deployment

## Development Setup

The project uses standard React development tools:
- `npm start` - Development server
- `npm build` - Production build
- `npm test` - Test runner
- `npm eject` - Eject from Create React App

## Firebase Integration

The project demonstrates Firebase usage for:
- Real-time database for movie/show data
- User authentication
- Hosting and deployment

## Educational Value

This repository is ideal for developers learning:
- Modern React development patterns
- Firebase integration techniques
- Component-based architecture
- State management in React applications
- Routing in single-page applications
- Real-world project structure and organization

The project provides hands-on experience with building a complex, interactive web application using industry-standard tools and practices.