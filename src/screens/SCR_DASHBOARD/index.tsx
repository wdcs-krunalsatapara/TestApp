import React from 'react';
import {View} from 'react-native';
import {styles} from './style';
import Header from '../../components/Header';
import SummaryComponent from '../../components/SummaryComponent';

import ListComponent from '../../components/ListComponent';

const Dashboard = () => {
  return (
    <View style={styles.container}>
      {/* render header with menu icon and title */}
      <Header />
      {/* render summary data with capital amount , p&l and value */}
      <SummaryComponent />
      {/* render lists of shares along with profit loss value and percentage */}
      <ListComponent />
    </View>
  );
};

export default Dashboard;
