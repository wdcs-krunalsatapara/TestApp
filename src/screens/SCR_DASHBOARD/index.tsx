import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import SummaryComponent from '../../components/SummaryComponent';

import ListComponent from '../../components/ListComponent';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <SummaryComponent />
      <ListComponent />
    </View>
  );
};

export default Dashboard;
