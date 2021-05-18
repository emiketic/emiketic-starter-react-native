import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Returns the session token stored in cache storage
 */
export const getSessionToken = async () => {
  const authToken = await AsyncStorage.getItem('authToken');
  return authToken || null;
};
