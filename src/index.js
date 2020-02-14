import React from 'react';
import { View, Text } from 'react-native';

function App() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
      }}
    >
      <Text
        style={{
          color: 'white',
        }}
      >
        Hello
      </Text>
    </View>
  );
}

export default App;
