import { Drawer } from 'expo-router/drawer';
import { HeaderButton } from '~/components/HeaderButton';

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        headerRight: () => <HeaderButton />,
      }}>
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home',
          title: 'Home',
        }}
      />
      <Drawer.Screen
        name="admin"
        options={{
          drawerLabel: 'Admin Panel',
          title: 'Admin Panel',
        }}
      />
    </Drawer>
  );
}
