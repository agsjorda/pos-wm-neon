import { supabase } from './supabase';

/**
 * Test Supabase connection
 * @returns Promise with connection status
 */
export async function testSupabaseConnection() {
  try {
    const { data, error } = await supabase
      .from('_test')
      .select('*')
      .limit(1);

    if (error && error.code !== 'PGRST116') {
      // PGRST116 = table doesn't exist, which is fine for testing connection
      throw error;
    }

    return {
      success: true,
      message: 'Connected to Supabase successfully',
    };
  } catch (error: any) {
    return {
      success: false,
      message: `Connection failed: ${error.message}`,
      error,
    };
  }
}

/**
 * Get current authenticated user
 */
export async function getCurrentUser() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error('Error getting user:', error);
    return null;
  }

  return user;
}

/**
 * Sign in with email and password
 */
export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Sign up with email and password
 */
export async function signUp(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw error;
  }

  return data;
}

/**
 * Sign out
 */
export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw error;
  }
}
