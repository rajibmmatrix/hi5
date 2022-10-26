import React, {FC} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS} from '~constants';

interface Props {
  label?: string;
  placeholder?: string;
  onChangeText?: (e: string) => void;
  value?: string;
  Icon: FC;
}

const AuthInput: FC<Props> = ({
  label,
  placeholder,
  onChangeText,
  value,
  Icon,
}) => {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.title}>{label}</Text>}
      <View style={styles.body}>
        <Icon />
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={COLORS.Primary_Placeholder}
          onChangeText={onChangeText}
          value={value}
          style={styles.input}
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
    color: COLORS.Primary_Input,
  },
});
