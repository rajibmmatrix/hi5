import React, {FC, useState} from 'react';
import {StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {COLORS, Icons} from '~constants';

interface Props {
  title: string;
  data: Array<any>;
  onChange: (value: string | any) => void;
  value: string;
}

const DropDown: FC<Props> = ({title, data, onChange, value}) => {
  const [open, setOpen] = useState(false);

  return (
    <DropDownPicker
      open={open}
      setOpen={setOpen}
      items={data}
      setValue={onChange}
      value={value}
      placeholder={title}
      placeholderStyle={styles.title}
      style={[styles.dropdown, open && styles.dropopen]}
      textStyle={styles.desc}
      ArrowUpIconComponent={() => <Icons.ArrowRight />}
      ArrowDownIconComponent={() => <Icons.ArrowRight />}
    />
  );
};

export default DropDown;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    paddingLeft: 20,
    paddingRight: 10,
    borderRadius: 100,
    backgroundColor: COLORS.Primary_DropDown,
  },
  dropopen: {
    borderRadius: 25,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: COLORS.Light,
  },
  desc: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Dark,
  },
});
