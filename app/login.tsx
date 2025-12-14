import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Pressable, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import NetInfo from '@react-native-community/netinfo';
import { supabase } from '@/lib/services/supabase';
import { useTheme } from '@/lib/stores/themeStore';
import { Ionicons } from '@expo/vector-icons';
import * as SecureStore from 'expo-secure-store';
import {
  storeCredentials,
  storeSession,
  validateOfflineCredentials,
  getStoredSession,
} from '@/lib/services/offlineAuth';

export default function LoginScreen() {
  const { isDarkMode } = useTheme();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // Load saved credentials on mount
  useEffect(() => {
    loadSavedCredentials();
  }, []);

  const loadSavedCredentials = async () => {
    try {
      const savedEmail = await SecureStore.getItemAsync('saved_email');
      const savedPassword = await SecureStore.getItemAsync('saved_password');
      
      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
        setRememberMe(true);
      }
    } catch (error) {
      console.error('Error loading saved credentials:', error);
    }
  };

  const savePermanentCredentials = async () => {
    try {
      if (rememberMe) {
        await SecureStore.setItemAsync('saved_email', email);
        await SecureStore.setItemAsync('saved_password', password);
      } else {
        await SecureStore.deleteItemAsync('saved_email');
        await SecureStore.deleteItemAsync('saved_password');
      }
    } catch (error) {
      console.error('Error saving credentials:', error);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      // Check network connectivity
      const netInfo = await NetInfo.fetch();
      const isOnline = netInfo.isConnected && netInfo.isInternetReachable !== false;

      if (isOnline) {
        // Online login - authenticate with Supabase
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        // Store credentials and session for offline use
        await storeCredentials(email, password);
        await storeSession(data.session);
        
        // Save credentials permanently if "Remember Me" is checked
        await savePermanentCredentials();

        Alert.alert('Success', 'Logged in successfully!');
        router.replace('/(drawer)/(tabs)');
      } else {
        // Offline login - validate against stored credentials
        const isValid = await validateOfflineCredentials(email, password);

        if (isValid) {
          // Restore stored session
          const session = await getStoredSession();
          if (session) {
            Alert.alert('Offline Mode', 'Logged in with cached credentials');
            router.replace('/(drawer)/(tabs)');
          } else {
            throw new Error('No cached session found. Please login online first.');
          }
        } else {
          throw new Error('Invalid credentials or no cached login found');
        }
      }
    } catch (error: any) {
      Alert.alert('Login Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter email and password');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) throw error;

      Alert.alert('Success', 'Account created! Please check your email to verify.');
    } catch (error: any) {
      Alert.alert('Signup Failed', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View
      className={`flex-1 justify-center px-6 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}
    >
      <Text
        className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
      >
        POS System
      </Text>

      <Text className={`text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Email
      </Text>
      <TextInput
        className={`h-12 px-4 mb-4 rounded-lg border ${
          isDarkMode
            ? 'bg-gray-800 border-gray-700 text-white'
            : 'bg-white border-gray-300 text-gray-900'
        }`}
        placeholder="your@email.com"
        placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />

      <View className="relative mb-4">
        <TextInput
          className={`h-12 px-4 pr-12 rounded-lg border ${
            isDarkMode
              ? 'bg-gray-800 border-gray-700 text-white'
              : 'bg-white border-gray-300 text-gray-900'
          }`}
          placeholder="••••••••"
          placeholderTextColor={isDarkMode ? '#9CA3AF' : '#6B7280'}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
        />
        <TouchableOpacity
          className="absolute right-3 top-3"
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={showPassword ? 'eye-off' : 'eye'}
            size={24}
            color={isDarkMode ? '#9CA3AF' : '#6B7280'}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        className="flex-row items-center mb-6"
        onPress={() => setRememberMe(!rememberMe)}
      >
        <View
          className={`w-5 h-5 rounded border-2 mr-2 justify-center items-center ${
            rememberMe
              ? 'bg-blue-500 border-blue-500'
              : isDarkMode
              ? 'border-gray-600'
              : 'border-gray-400'
          }`}
        >
          {rememberMe && <Ionicons name="checkmark" size={16} color="white" />}
        </View>
        <Text className={`text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Remember my credentials
        </Text>
      </TouchableOpacity>

      <Pressable
        className={`h-12 rounded-lg justify-center items-center mb-3 ${
          loading ? 'bg-blue-300' : 'bg-blue-500'
        }`}
        onPress={handleLogin}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="white" />
        ) : (
          <Text className="text-white font-semibold text-lg">Login</Text>
        )}
      </Pressable>

      <Pressable
        className={`h-12 rounded-lg justify-center items-center ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`}
        onPress={handleSignup}
        disabled={loading}
      >
        <Text
          className={`font-semibold text-lg ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
        >
          Create Account
        </Text>
      </Pressable>
    </View>
  );
}
