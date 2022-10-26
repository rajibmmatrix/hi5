import React, {FC} from 'react';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {COLORS} from '~constants';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  titleStyle?: TextStyle;
}

const Button: FC<Props> = ({title, onPress, style, titleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={COLORS.Primary_Gradient}
        style={[styles.container, style]}>
        <Text style={[styles.title, titleStyle]}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: 200,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: COLORS.Dark,
    backgroundColor: 'transparent',
    textTransform: 'uppercase',
  },
});
