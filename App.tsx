import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  Button,
  Alert
} from 'react-native'

function App() {
  return(<SafeAreaView>
    <View>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Text>Hello World !</Text>
      <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Click Me"
        color="#841584"
        accessibilityLabel="Learn more about this purple button">
      </Button>
    </View>
  </SafeAreaView>)
}

export default App;