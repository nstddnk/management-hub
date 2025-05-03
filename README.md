# Management Hub

## Project Overview
Management Hub is a modern web application designed for efficient business management. The platform provides a centralized dashboard for monitoring accounts and various administrative functions.

## Features
- **Dashboard**: Centralized overview of key metrics and activities
- **Account Management**: Manage user accounts and related information
- **Navigation System**: Intuitive sidebar navigation for accessing different sections

## Technologies Used

### Frontend
- **React 18**: Modern UI library for building the user interface
- **TypeScript**: For type-safe JavaScript development
- **Vite**: Next-generation frontend tooling for faster development
- **React Router DOM**: For client-side routing and navigation
- **Formik**: Form management and validation

### UI/UX
- **Tailwind CSS**: Utility-first CSS framework for styling
- **HeroUI Components**: Comprehensive UI component library
- **Framer Motion**: Animation library for React
- **Headless UI**: Unstyled, accessible UI components
- **Heroicons**: Beautiful hand-crafted SVG icons
- **Lucide React**: Beautiful & consistent icon toolkit

### Development Tools
- **ESLint**: JavaScript/TypeScript linting tool
- **Prettier**: Code formatter
- **PostCSS**: CSS transformation tool
- **TypeScript**: Static type checking

## Project Structure
```
src/
├── components/       # Reusable UI components
│   ├── accounts/     # Account-related components
│   ├── dashboard/    # Dashboard-related components
│   ├── layout/       # Layout components (navbar, sidebar)
│   └── ui/           # Generic UI components
├── pages/            # Top-level page components
│   ├── Dashboard.tsx # Main dashboard view
│   ├── Accounts.tsx  # Accounts management view
│   └── ...
├── mockData/         # Mock data for development
├── utils/            # Utility functions and helpers
├── styles/           # Global styles
└── App.tsx           # Main application component
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/management-hub.git
   cd management-hub
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Build for production
   ```bash
   npm run build
   # or
   yarn build
   ```

## Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint for code linting
- `npm run lint:fix` - Fix linting issues automatically
- `npm run format` - Format code with Prettier

## License
This project is licensed under the terms found in the LICENSE file in the root directory.
