/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {Provider, useDispatch} from 'react-redux'
import LinearGradient from 'react-native-linear-gradient';
import Description from './components/Description';
import Header from './components/Header';
import Repositories from './components/Repositories';
import { Colors } from './theme/COLORS';
import {store, persistor} from './store/store';
import ModalSeach from './components/Modal';
import {PersistGate} from 'redux-persist/integration/react'
import ModalLoad from './components/ModalLoad';


const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <LinearGradient style={[styles.container, styles.background]} colors={[Colors.blue03, Colors.blue02]}>
              <Header/>
              <Description/>
              <Repositories/>
              <ModalSeach/>
              <ModalLoad/>
          </LinearGradient>
        </PersistGate>
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
