import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import SurroundView from 'react-native-surround-view';

export default function App() {
  return (
    <View style={styles.container}>
      <SurroundView width={200} height={35} style={styles.box}>
        <Text>{'TOP START'}</Text>
      </SurroundView>
      <SurroundView
        width={200}
        height={35}
        startPoint={'BOTTOM_START'}
        style={styles.box}
      >
        <Text>{'BOTTOM START'}</Text>
      </SurroundView>
      <SurroundView
        width={200}
        height={35}
        startPoint={'TOP_END'}
        style={styles.box}
      >
        <Text>{'TOP END'}</Text>
      </SurroundView>
      <SurroundView
        width={200}
        height={35}
        startPoint={'BOTTOM_END'}
        style={styles.box}
      >
        <Text>{'BOTTOM END'}</Text>
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
    marginVertical: 10,
  },
});
