import * as SecureStore from 'expo-secure-store';
import { supabase } from './supabase';

const STORED_CREDENTIALS_KEY = 'pos_stored_credentials';
const STORED_SESSION_KEY = 'pos_stored_session';

export interface StoredCredentials {
  email: string;
  passwordHash: string; // Simple hash for offline validation
}

/**
 * Hash password for offline storage (simple hash, not for server)
 */
async function simpleHash(text: string): Promise<string> {
  // Simple hash for offline validation only
  // In production, consider using a proper crypto library
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(36);
}

/**
 * Store credentials after successful online login
 */
export async function storeCredentials(email: string, password: string): Promise<void> {
  try {
    const passwordHash = await simpleHash(password);
    const credentials: StoredCredentials = { email, passwordHash };
    await SecureStore.setItemAsync(STORED_CREDENTIALS_KEY, JSON.stringify(credentials));
  } catch (error) {
    console.error('Error storing credentials:', error);
  }
}

/**
 * Store session data for offline access (only essential parts)
 */
export async function storeSession(session: any): Promise<void> {
  try {
    // Only store essential session data to avoid 2048 byte limit
    const essentialSession = {
      access_token: session.access_token,
      refresh_token: session.refresh_token,
      user: {
        id: session.user?.id,
        email: session.user?.email,
      },
      expires_at: session.expires_at,
    };
    await SecureStore.setItemAsync(STORED_SESSION_KEY, JSON.stringify(essentialSession));
  } catch (error) {
    console.error('Error storing session:', error);
  }
}

/**
 * Get stored session
 */
export async function getStoredSession(): Promise<any | null> {
  try {
    const sessionData = await SecureStore.getItemAsync(STORED_SESSION_KEY);
    return sessionData ? JSON.parse(sessionData) : null;
  } catch (error) {
    console.error('Error getting stored session:', error);
    return null;
  }
}

/**
 * Validate credentials for offline login
 */
export async function validateOfflineCredentials(
  email: string,
  password: string
): Promise<boolean> {
  try {
    const storedData = await SecureStore.getItemAsync(STORED_CREDENTIALS_KEY);
    if (!storedData) return false;

    const credentials: StoredCredentials = JSON.parse(storedData);
    const passwordHash = await simpleHash(password);

    return credentials.email === email && credentials.passwordHash === passwordHash;
  } catch (error) {
    console.error('Error validating offline credentials:', error);
    return false;
  }
}

/**
 * Clear stored credentials (on logout)
 */
export async function clearStoredCredentials(): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(STORED_CREDENTIALS_KEY);
    await SecureStore.deleteItemAsync(STORED_SESSION_KEY);
  } catch (error) {
    console.error('Error clearing credentials:', error);
  }
}

/**
 * Check if user has stored credentials
 */
export async function hasStoredCredentials(): Promise<boolean> {
  try {
    const storedData = await SecureStore.getItemAsync(STORED_CREDENTIALS_KEY);
    return !!storedData;
  } catch (error) {
    return false;
  }
}
