import React, {FC, memo} from 'react';
import {StyleSheet, View} from 'react-native';
import Spinner from './Spinner';
import {COLORS} from '~constants';

interface Props {
  showSpinner?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

const Container: FC<Props> = ({showSpinner = false, children}) => {
  return (
    <View style={styles.container}>
      {children}
      {showSpinner ? <Spinner /> : null}
    </View>
  );
};

export default memo(Container);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Primary_Background,
  },
});
