import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BarcodeScanner from './components/barcodeScanner';
import Camera from 'react-native-camera';

export default function App() {
  return (
    <View style={styles.container}>
      <BarcodeScanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
