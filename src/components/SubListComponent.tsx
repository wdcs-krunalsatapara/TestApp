import React, {memo, useCallback, useContext, useEffect, useRef} from 'react';
import {FlatList} from 'react-native';
import SubRawItem from './SubRawItem';
import {generateRandomNumber} from '../constants/mockData';
import {AppContext} from '../constants/Context';

const SubListComponent = (props: any) => {
  const {currentIndex} = props;

  const {stokesData, setStokesData} = useContext(AppContext);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    startUpdatingSubItems();
    return stopUpdatingSubItems;
  }, []);

  // its generate random number for subItemProfitLossAmount and update in subItemsArray
  const startUpdatingSubItems = useCallback(() => {
    intervalIdRef.current = setInterval(() => {
      setStokesData((prevstokesData: any) => {
        const newstokesData = [...prevstokesData];
        const currentSubItems = newstokesData[currentIndex].subItemsArray;
        const updatedSubItems = currentSubItems.map((subItem: any) => ({
          ...subItem,
          subItemProfitLossAmount: generateRandomNumber(),
        }));

        newstokesData[currentIndex] = {
          ...newstokesData[currentIndex],
          subItemsArray: updatedSubItems,
        };

        return newstokesData;
      });
    }, 500);
  }, [currentIndex, setStokesData]);

  const stopUpdatingSubItems = useCallback(
    () => clearInterval(intervalIdRef.current),
    [],
  );

  // its render for sub stokes name, qty, ltp, val, pnl
  const renderItem = ({index}) => (
    <SubRawItem
      index={index}
      item={stokesData[currentIndex].subItemsArray[index]}
    />
  );

  return (
    <FlatList
      data={stokesData[currentIndex].subItemsArray}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      scrollEnabled={false}
    />
  );
};

export default memo(SubListComponent);
