import * as Sentry from '@sentry/react-native';
import { SENTRY_CONFIG } from '../constants/config';

export function initializeSentry() {
  if (SENTRY_CONFIG.ENABLED && SENTRY_CONFIG.DSN) {
    Sentry.init({
      dsn: SENTRY_CONFIG.DSN,
      environment: SENTRY_CONFIG.ENVIRONMENT,
      enableAutoSessionTracking: true,
      sessionTrackingIntervalMillis: 10000,
      tracesSampleRate: 1.0,
      enableNative: true,
      enableNativeCrashHandling: true,
      beforeSend(event, hint) {
        // Filter out sensitive data before sending to Sentry
        if (event.request?.data) {
          delete event.request.data;
        }
        return event;
      },
    });
  }
}
