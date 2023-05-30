import React, {memo, useCallback, useContext, useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import SubRawItem from './SubRawItem';
import {GenerateRandomNumber} from '../constants/mockData';
import {AppContext} from '../constants/Context';

const SubListComponent = ({currentIndex}) => {
  const {arrayData, setArrayData} = useContext(AppContext);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    startUpdatingSubItems();
    return stopUpdatingSubItems;
  }, []);

  const startUpdatingSubItems = useCallback(() => {
    intervalIdRef.current = setInterval(() => {
      setArrayData(prevArrayData => {
        const newArrayData = [...prevArrayData];
        const currentSubItems = newArrayData[currentIndex].subItemsArray;
        const updatedSubItems = currentSubItems.map(subItem => ({
          ...subItem,
          subItemProfitLossAmount: GenerateRandomNumber(),
        }));

        newArrayData[currentIndex] = {
          ...newArrayData[currentIndex],
          subItemsArray: updatedSubItems,
        };

        return newArrayData;
      });
    }, 500);
  }, [currentIndex, setArrayData]);

  const stopUpdatingSubItems = useCallback(() => {
    clearInterval(intervalIdRef.current);
  }, []);

  const renderItem = ({item, index}) => {
    return (
      <SubRawItem
        index={index}
        item={arrayData[currentIndex].subItemsArray[index]}
      />
    );
  };

  return (
    <FlatList
      data={arrayData[currentIndex].subItemsArray}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={false}
    />
  );
};

export default memo(SubListComponent);
