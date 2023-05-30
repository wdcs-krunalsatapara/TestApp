import React, {memo} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {icons} from '../../assets/images';
import {Strings} from '../constants/strings';

import {Colors, Fonts} from '../theme';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Image source={icons.ic_menu} style={styles.headerMenu} />
      <Text style={styles.headerTitle}>{Strings.str_header_title}</Text>
      <Image source={icons.ic_menu} style={styles.headerImageMenu} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    maxHeight: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  headerTitle: {
    color: Colors.black,
    fontSize: 18,
    fontFamily: Fonts.type.Montserrat_Bold,
  },
  headerMenu: {
    height: 24,
    width: 24,
    marginHorizontal: 16,
  },
  headerImageMenu: {
    height: 24,
    width: 24,
    marginHorizontal: 16,
    opacity: 0,
  },
});

export default memo(Header);
