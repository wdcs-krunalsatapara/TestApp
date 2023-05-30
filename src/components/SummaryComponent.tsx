import React, {memo, useCallback, useContext, useEffect, useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Strings} from '../constants/strings';
import {icons} from '../../assets/images';
import {Colors, Fonts} from '../theme';
import fonts from '../theme/fonts';
import {AppContext} from '../constants/Context';
import {numDifferentiation} from '../constants/mockData';

const SummaryComponents = () => {
  const {arrayData} = useContext(AppContext);

  const [totalCapitalAmount, setTotalCapitalAmount] = useState(0);
  const [totalProfitLossObj, setTotalProfitLossObj] = useState({
    totalProfitLoss: 0,
    profitLossPercent: 0,
  });

  const updateTotalCapitalAmount = useCallback(() => {
    // let sum = 0;
    // for (let i = 0; i < arrayData.length; i++) {
    //   sum += arrayData[i].itemTotalAmount;
    // }
    const sum = arrayData.reduce(
      (accumulator, currentValue) => accumulator + currentValue.itemTotalAmount,
      0,
    );

    setTotalCapitalAmount(sum);
  }, [arrayData]);

  const updateTotalProfitLossAmount = useCallback(() => {
    // let sum = 0;
    // for (let i = 0; i < arrayData.length; i++) {
    //   sum += arrayData[i].itemTotalProfitLossAmount;
    // }
    const sum = arrayData.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.itemTotalProfitLossAmount,
      0,
    );

    const percent = (sum * 100) / totalCapitalAmount;

    setTotalProfitLossObj({
      totalProfitLoss: numDifferentiation(sum),
      profitLossPercent: percent ? parseFloat(percent.toFixed(2)) : 0,
    });
  }, [arrayData]);

  useEffect(() => {
    updateTotalProfitLossAmount();
    updateTotalCapitalAmount();
  }, [updateTotalCapitalAmount, updateTotalProfitLossAmount]);

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Text style={styles.txtSummary}>{Strings.str_summary}</Text>

        <View style={styles.topRightContainer}>
          <Text style={styles.txtTopRight}>{Strings.str_expiry}</Text>
          <Image source={icons.ic_down_arrow} style={styles.icDown} />
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.bottomLeftRightContainer}>
          <Text style={styles.txtSubTitle}>{Strings.str_capital}</Text>
          <Text style={styles.txtSubTitleValue}>
            {'$ ' + numDifferentiation(totalCapitalAmount)}
          </Text>
        </View>
        <View style={styles.bottomMiddleContainer}>
          <Text style={styles.txtSubTitle}>{Strings.str_pnl}</Text>
          <Text style={styles.txtSubTitleValue}>
            {`$ ${totalProfitLossObj.totalProfitLoss} (${totalProfitLossObj.profitLossPercent} %)`}
          </Text>
        </View>
        <View style={styles.bottomLeftRightContainer}>
          <Text style={styles.txtSubTitle}>{Strings.str_value}</Text>
          <Text style={styles.txtSubTitleValue}>{'$ -43.66 L(43)'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: Colors.blue_Lotus,
    paddingHorizontal: 12,
    paddingVertical: 16,
    margin: 16,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtSummary: {
    fontFamily: fonts.type.Montserrat_Bold,
    fontSize: 20,
    color: Colors.white,
  },
  topRightContainer: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: Colors.dull_Lavender,
    borderWidth: 1,
    borderRadius: 6,
  },
  txtTopRight: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: Fonts.type.Poppins_Regular,
  },
  icDown: {
    height: 16,
    width: 16,
    tintColor: Colors.white,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  bottomLeftRightContainer: {
    alignItems: 'center',
  },
  bottomMiddleContainer: {
    alignItems: 'center',
  },
  txtSubTitle: {
    fontSize: 15,
    fontFamily: Fonts.type.Montserrat_Bold,
    color: Colors.white,
  },
  txtSubTitleValue: {
    marginTop: 8,
    fontSize: 12,
    fontFamily: Fonts.type.Poppins_Regular,
    color: Colors.white,
  },
});

export default memo(SummaryComponents);
