import React, {memo, useCallback, useContext, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors, Fonts} from '../theme';
import {Strings} from '../constants/strings';
import SubListComponent from './SubListComponent';
import {AppContext} from '../constants/Context';

const RawItem = ({index, toggle, handleCollapseExpand}) => {
  const {arrayData, setArrayData} = useContext(AppContext);

  const selectedItem = arrayData[index];

  const updateTotalProfitLossAmount = useCallback(() => {
    const sum = selectedItem.subItemsArray.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.subItemProfitLossAmount,
      0,
    );

    const percent = (sum * 100) / selectedItem.itemTotalAmount;

    selectedItem.itemTotalProfitLossAmount = sum;
    selectedItem.itemTotalProfitLossPercent = parseFloat(percent.toFixed(2));

    setArrayData(prevArrayData => [...prevArrayData]);
  }, [selectedItem, setArrayData]);

  useEffect(() => {
    updateTotalProfitLossAmount();
  }, [updateTotalProfitLossAmount]);

  const handlePress = () => {
    handleCollapseExpand(index);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.itemContainer}
      onPress={handlePress}>
      <Text style={styles.txtItemTitle}>{arrayData[index].itemTitleName}</Text>
      <View style={styles.itemRawMiddleContainer}>
        <Text
          style={[
            styles.txtItemSubTitle,
            {
              color:
                arrayData[index].itemType === 'live'
                  ? Colors.oslo_Grey
                  : Colors.saffron_Mango,
            },
          ]}>
          {arrayData[index].itemSubTitleName}
        </Text>
        <Text style={styles.txtItemProfitLoss}>
          {'$ '}
          <Text
            style={[
              styles.txtItemProfitLoss,
              {
                color:
                  arrayData[index].itemTotalProfitLossAmount > 0
                    ? Colors.light__Green
                    : Colors.reddish,
              },
            ]}>
            {`${arrayData[index].itemTotalProfitLossAmount} (${arrayData[index].itemTotalProfitLossPercent} %)`}
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.itemRawBottomContainer,
          {display: toggle ? 'flex' : 'none'},
        ]}>
        <View style={styles.itemRawBottomLableContainer}>
          <Text style={styles.itemRawBottomLable}>{Strings.str_qty}</Text>
          <Text style={styles.itemRawBottomLable}>{Strings.str_ltp}</Text>
          <Text style={styles.itemRawBottomLable}>{Strings.str_val}</Text>
          <Text style={styles.itemRawBottomLable}>{Strings.str_PNL}</Text>
        </View>

        <SubListComponent currentIndex={index} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomColor: Colors.mercury,
    borderBottomWidth: 1,
    paddingVertical: 12,
    marginHorizontal: 16,
  },
  txtItemTitle: {
    color: Colors.blue_Lotus,
    fontSize: 13,
    fontFamily: Fonts.type.Poppins_SemiBold,
  },
  itemRawMiddleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  txtItemSubTitle: {
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.oslo_Grey,
  },
  txtItemProfitLoss: {
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.black,
  },
  itemRawBottomContainer: {
    marginTop: 12,
  },
  itemRawBottomLableContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemRawBottomLable: {
    fontSize: 13,
    fontFamily: Fonts.type.Poppins_SemiBold,
    color: Colors.black,
  },
  itemRawBottomValue: {
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.black,
  },
});

export default memo(RawItem);
