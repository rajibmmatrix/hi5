import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View, ViewStyle} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  label?: string;
  placeholder?: string;
  onChangeText?: (e: string) => void;
  value?: string;
  Icon: FC;
  editable?: boolean;
  isMobile?: boolean;
  textColor?: string;
  hideBorder?: boolean;
  containerStyle?: ViewStyle;
}

const AuthInput: FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  value,
  Icon,
  editable = true,
  isMobile = false,
  textColor = COLORS.Primary_Input,
  hideBorder = false,
  containerStyle,
}) => {
  const border = hideBorder ? {} : styles.borders;

  return (
    <View style={[styles.container, border, containerStyle]}>
      {label && <Text style={styles.title}>{label}</Text>}
      <View style={styles.body}>
        <Icon />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.Primary_Placeholder}
          onChangeText={onChangeText}
          value={value}
          style={[styles.input, {color: textColor}]}
          editable={editable}
          keyboardType={isMobile ? 'number-pad' : 'default'}
        />
      </View>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 30,
  },
  borders: {
    borderBottomWidth: 1,
    borderColor: COLORS.Primary_Border,
  },
  title: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Primary_Link,
    marginLeft: 28,
  },
  body: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 12,
  },
});
