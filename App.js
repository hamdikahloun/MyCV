/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import codePush from 'react-native-code-push';
let codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_RESUME};
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.styleView}>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <SafeAreaView>
          <View>
            <Text
              style={{
                fontSize: 24,
                fontWeight: '600',
              }}>
              Hamdi Kahloun
            </Text>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  styleView: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
App = codePush(codePushOptions)(App);

