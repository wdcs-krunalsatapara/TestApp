import React, {memo, useContext, useState} from 'react';
import {FlatList} from 'react-native';

import RawItem from './RawItem';
import {AppContext} from '../constants/Context';

const ListComponent = () => {
  const {arrayData} = useContext(AppContext);

  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleCollapseExpand = index => {
    setCurrentIndex(currentIndex === index ? -1 : index);
  };

  const renderItem = ({item, index}) => {
    return (
      <RawItem
        handleCollapseExpand={handleCollapseExpand}
        toggle={index === currentIndex}
        index={index}
      />
    );
  };

  return (
    <FlatList
      data={arrayData}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default memo(ListComponent);
