import React, {useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import Dashboard from './src/screens/SCR_DASHBOARD';
import {AppContext} from './src/constants/Context';
import {ListArrayData} from './src/constants/mockData';

const App = () => {
  const [arrayData, setArrayData] = useState(ListArrayData);
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <AppContext.Provider value={{arrayData, setArrayData}}>
        <Dashboard />
      </AppContext.Provider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },
});

export default App;
