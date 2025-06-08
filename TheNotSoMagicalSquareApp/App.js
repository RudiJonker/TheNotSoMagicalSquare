
import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function App() {
  const [color, setColor] = useState('white');

  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: color }]} />
      <Button title="Red" onPress={() => setColor('red')} />
      <Button title="Green" onPress={() => setColor('green')} />
      <Button title="Blue" onPress={() => setColor('blue')} />
      <Button title="Yellow" onPress={() => setColor('yellow')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  square: { width: 100, height: 100, marginBottom: 20 },
});
    