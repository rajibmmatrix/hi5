import React, {FC, memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '~constants';

const HeaderBack: FC = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icons.ArrowLeft />
    </TouchableOpacity>
  );
};

export default memo(HeaderBack);
