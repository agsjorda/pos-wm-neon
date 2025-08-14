import { View, Text } from 'react-native';

export default function OrdersPageLayout() {
  return (
    <View className="flex-1 p-4">
      <Header />
      <MainContent />
    </View>
  );
}

function Header() {
  return (
    <View className="bg-gray-100 py-2 px-4">
      <Text className="text-lg font-bold">Orders</Text>
    </View>
  );
}

function MainContent() {
  return (
    <View className="mt-4">
      <Card />
      <Card />
      <Card />
    </View>
  );
}

function Card() {
  return (
    <View className="bg-white rounded-md shadow-md p-4 m-2">
      <Text className="text-lg font-bold">Order #123</Text>
      <Text>Customer: John Doe</Text>
      <Text>Date: 2023-02-20</Text>
    </View>
  );
}
