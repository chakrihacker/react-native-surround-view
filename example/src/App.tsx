import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SurroundView from 'react-native-surround-view';

export default function App() {
  return (
    <View style={styles.container}>
      <SurroundView width={200} height={35}>
        <Text>{'Chakravarthy'}</Text>
      </SurroundView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
