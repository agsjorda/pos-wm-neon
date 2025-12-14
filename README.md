# POS WM NeonDB

A modern Point of Sale (POS) system built with React Native, Expo, and WatermelonDB.

## 🚀 Features

- **Modern Tech Stack**: Expo SDK 54, React Native 0.81.5, React 19
- **Type-Safe**: Full TypeScript support
- **File-based Routing**: Expo Router for intuitive navigation
- **State Management**: Zustand for performant state management
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Local Database**: WatermelonDB for offline-first data persistence
- **API Client**: Axios with React Query for server state management
- **Testing**: Jest & React Native Testing Library
- **Error Tracking**: Sentry integration
- **Form Validation**: Zod schemas with React Hook Form
- **Secure Storage**: Expo Secure Store for sensitive data
- **Code Quality**: ESLint + Prettier

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI
- iOS Simulator (Mac) or Android Emulator

## 🛠️ Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd pos-wm-neondb
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. **Start the development server**
```bash
npm start
```

## 📱 Running the App

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

## 🧪 Testing

```bash
# Run tests
npm test

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage
```

## 🏗️ Project Structure

```
├── app/                    # Expo Router pages
│   ├── (drawer)/          # Drawer navigation routes
│   │   ├── (tabs)/        # Tab navigation routes
│   │   │   ├── index.tsx  # Home screen
│   │   │   ├── orders.tsx # Orders screen
│   │   │   ├── profile.tsx# Profile screen
│   │   │   └── settings.tsx# Settings screen
│   │   └── admin.tsx      # Admin panel
│   ├── _layout.tsx        # Root layout with providers
│   └── modal.tsx          # Modal screen
├── assets/                # Images, fonts, etc.
├── components/            # Reusable components
├── lib/                   # Core library code
│   ├── constants/         # App constants
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API client, storage, etc.
│   ├── stores/            # Zustand stores
│   ├── types/             # TypeScript types
│   └── utils/             # Utility functions
├── __tests__/             # Test files
└── ...config files
```

## 🔧 Configuration Files

- `app.json` - Expo configuration
- `babel.config.js` - Babel configuration
- `metro.config.js` - Metro bundler configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `jest.config.js` - Jest test configuration
- `.env` - Environment variables

## 🔐 Environment Variables

Create a `.env` file with the following variables:

```env
API_URL=https://api.example.com
API_TIMEOUT=30000
SENTRY_DSN=your-sentry-dsn
SENTRY_ENVIRONMENT=development
APP_ENV=development
```

## 📚 Tech Stack

### Core
- **React Native** - Mobile framework
- **Expo** - Development platform
- **TypeScript** - Type safety

### Navigation & Routing
- **Expo Router** - File-based routing
- **React Navigation** - Drawer & Tab navigation

### State Management
- **Zustand** - Lightweight state management
- **React Query** - Server state management

### UI & Styling
- **NativeWind** - Tailwind CSS for React Native
- **Expo Vector Icons** - Icon library

### Data & Storage
- **WatermelonDB** - Local database
- **Expo Secure Store** - Secure storage
- **Axios** - HTTP client

### Development Tools
- **Jest** - Testing framework
- **React Native Testing Library** - Component testing
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Sentry** - Error tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🐛 Issues

If you encounter any issues, please create an issue on the repository.
