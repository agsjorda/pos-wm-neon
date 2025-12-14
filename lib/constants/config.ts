export const APP_CONFIG = {
  APP_NAME: 'POS WM NeonDB',
  APP_VERSION: '1.0.0',
  ENV: process.env.APP_ENV || 'development',
} as const;

export const API_CONFIG = {
  BASE_URL: process.env.API_URL || 'https://api.example.com',
  TIMEOUT: Number(process.env.API_TIMEOUT) || 30000,
} as const;

export const SENTRY_CONFIG = {
  DSN: process.env.SENTRY_DSN || '',
  ENVIRONMENT: process.env.SENTRY_ENVIRONMENT || 'development',
  ENABLED: process.env.APP_ENV === 'production',
} as const;

export const STORAGE_KEYS = {
  AUTH_TOKEN: '@auth_token',
  USER_DATA: '@user_data',
  THEME: '@theme',
} as const;
