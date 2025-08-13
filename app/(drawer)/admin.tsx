import { StyleSheet, View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function AdminPanel() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1 px-5">
        <View className="py-6">
          <Text className="text-3xl font-bold text-gray-900 text-center mb-2">Admin Panel</Text>
          <Text className="text-base text-gray-600 text-center mb-8">System Administration & Control</Text>
        </View>
        
        <View className="bg-white rounded-xl p-5 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 mb-4">User Management</Text>
          <View className="space-y-3">
            <Pressable className="flex-row items-center p-3 bg-blue-50 rounded-lg">
              <FontAwesome name="users" size={20} color="#007AFF" className="mr-3" />
              <Text className="text-base text-gray-900">Manage Users</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-blue-50 rounded-lg">
              <FontAwesome name="user-plus" size={20} color="#007AFF" className="mr-3" />
              <Text className="text-base text-gray-900">Add New User</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-blue-50 rounded-lg">
              <FontAwesome name="key" size={20} color="#007AFF" className="mr-3" />
              <Text className="text-base text-gray-900">Role Management</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
          </View>
        </View>
        
        <View className="bg-white rounded-xl p-5 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 mb-4">System Settings</Text>
          <View className="space-y-3">
            <Pressable className="flex-row items-center p-3 bg-green-50 rounded-lg">
              <FontAwesome name="database" size={20} color="#10B981" className="mr-3" />
              <Text className="text-base text-gray-900">Database Management</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-green-50 rounded-lg">
              <FontAwesome name="cog" size={20} color="#10B981" className="mr-3" />
              <Text className="text-base text-gray-900">System Configuration</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-green-50 rounded-lg">
              <FontAwesome name="shield" size={20} color="#10B981" className="mr-3" />
              <Text className="text-base text-gray-900">Security Settings</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
          </View>
        </View>
        
        <View className="bg-white rounded-xl p-5 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 mb-4">Reports & Analytics</Text>
          <View className="space-y-3">
            <Pressable className="flex-row items-center p-3 bg-purple-50 rounded-lg">
              <FontAwesome name="bar-chart" size={20} color="#8B5CF6" className="mr-3" />
              <Text className="text-base text-gray-900">Sales Analytics</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-purple-50 rounded-lg">
              <FontAwesome name="pie-chart" size={20} color="#8B5CF6" className="mr-3" />
              <Text className="text-base text-gray-900">Inventory Reports</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
            <Pressable className="flex-row items-center p-3 bg-purple-50 rounded-lg">
              <FontAwesome name="file-text" size={20} color="#8B5CF6" className="mr-3" />
              <Text className="text-base text-gray-900">Export Data</Text>
              <FontAwesome name="chevron-right" size={16} color="#666" className="ml-auto" />
            </Pressable>
          </View>
        </View>
        
        <View className="bg-white rounded-xl p-5 mb-4 shadow-sm">
          <Text className="text-lg font-semibold text-gray-900 mb-4">System Status</Text>
          <View className="space-y-3">
            <View className="flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-green-500 rounded-full mr-3"></View>
                <Text className="text-base text-gray-900">Database</Text>
              </View>
              <Text className="text-sm text-green-600 font-medium">Online</Text>
            </View>
            <View className="flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-green-500 rounded-full mr-3"></View>
                <Text className="text-base text-gray-900">API Services</Text>
              </View>
              <Text className="text-sm text-green-600 font-medium">Active</Text>
            </View>
            <View className="flex-row items-center justify-between p-3 bg-gray-50 rounded-lg">
              <View className="flex-row items-center">
                <View className="w-3 h-3 bg-green-500 rounded-full mr-3"></View>
                <Text className="text-base text-gray-900">Backup System</Text>
              </View>
              <Text className="text-sm text-green-600 font-medium">Running</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
