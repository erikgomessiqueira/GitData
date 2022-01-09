/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Provider} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Description from './components/Description';
import Header from './components/Header';
import Repositories from './components/Repositories';
import { Colors } from './theme/COLORS';
import store from './store/store';
import ModalSeach from './components/Modal';



const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <LinearGradient style={[styles.container, styles.background]} colors={[Colors.blue03, Colors.blue02]}>
            <Header/>
            <Description/>
            <Repositories/>
            <ModalSeach/>
        </LinearGradient>
      </Provider>
      </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  background:{
    padding: 10,
  }
});

export default App;
