import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './src/navigation/AppNav';
import { Store } from './src/redux/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <AppNav />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
