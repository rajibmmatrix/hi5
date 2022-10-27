import React, {FC, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {DropDown} from './common';

const DATA = [
  {label: 'Bengali', value: 'bengali', id: 1},
  {label: 'Hindi', value: 'hindi', id: 2},
];

const Filters: FC = () => {
  const [value, setValue] = useState<string>('');

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <DropDown
          data={DATA}
          title="Category"
          onChange={setValue}
          value={value}
        />
      </View>
      <View style={styles.item}>
        <DropDown
          data={DATA}
          title="Language"
          onChange={setValue}
          value={value}
        />
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  item: {
    flex: 1,
    height: 50,
    marginHorizontal: 5,
  },
});
