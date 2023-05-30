import React, {memo, useContext, useState} from 'react';
import {FlatList} from 'react-native';

import RawItem from './RawItem';
import {AppContext} from '../constants/Context';

const ListComponent = () => {
  const {stokesData} = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleCollapseExpand = (index: React.SetStateAction<number>) => {
    setCurrentIndex(currentIndex === index ? -1 : index);
  };

  // its render for main stokes name and profit loss amount and percentage
  const renderItem = ({index}) => (
    <RawItem
      handleCollapseExpand={handleCollapseExpand}
      toggle={index === currentIndex}
      index={index}
    />
  );

  return (
    <FlatList
      data={stokesData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default memo(ListComponent);
