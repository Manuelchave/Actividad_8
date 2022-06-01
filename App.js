import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Foco from './src/components/Foco';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Actividad 8</Text>
      <Foco></Foco>
      <StatusBar style="auto" />
    </View>
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