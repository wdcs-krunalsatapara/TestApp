import React, {memo} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors, Fonts} from '../theme';

const SubRawItem = (props: any) => {
  const {item} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.txtSubItemsTitle}>
        {item.id}.{item.subItemsTitleName}
      </Text>
      <View style={styles.itemRawBottomValueContainer}>
        <Text style={styles.itemRawBottomValue}>
          {item.subItemsQty.toFixed(2)}
        </Text>
        <Text style={styles.itemRawBottomValue}>
          {item.subItemsLtp.toFixed(2)}
        </Text>
        <Text style={styles.itemRawBottomValue}>{item.subItemsVal}</Text>
        <Text
          style={[
            styles.itemRawBottomValue,
            {
              color:
                item.subItemProfitLossAmount > 0
                  ? Colors.light__Green
                  : Colors.reddish,
            },
          ]}>
          {item.subItemProfitLossAmount}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 4,
  },
  txtSubItemsTitle: {
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.black,
    textDecorationLine: 'underline',
  },
  itemRawBottomValueContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  itemRawBottomValue: {
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.black,
  },
});

export default memo(SubRawItem);
