import React, {FC, useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown: FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{width: '40%'}}
    />
  );
};

export default DropDown;
