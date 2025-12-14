import * as SecureStore from 'expo-secure-store';
import { STORAGE_KEYS } from '../constants/config';

export async function saveSecure(key: string, value: string): Promise<void> {
  try {
    await SecureStore.setItemAsync(key, value);
  } catch (error) {
    console.error('Error saving to secure store:', error);
    throw error;
  }
}

export async function getSecure(key: string): Promise<string | null> {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.error('Error reading from secure store:', error);
    return null;
  }
}

export async function deleteSecure(key: string): Promise<void> {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.error('Error deleting from secure store:', error);
    throw error;
  }
}

// Auth token helpers
export const saveAuthToken = (token: string) => saveSecure(STORAGE_KEYS.AUTH_TOKEN, token);
export const getAuthToken = () => getSecure(STORAGE_KEYS.AUTH_TOKEN);
export const deleteAuthToken = () => deleteSecure(STORAGE_KEYS.AUTH_TOKEN);
