import React, {FC, memo} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {COLORS} from '~constants';

interface Props {
  title: string;
  placeholder?: string;
  onChangeText?: (value: string) => void;
  value: string;
  Icon?: FC<SvgProps>;
  RightIcon?: FC<SvgProps>;
  onRightPress?: () => void;
  props?: TextInputProps;
}

const EditProfileItem: FC<Props> = ({
  title,
  placeholder,
  onChangeText,
  value,
  Icon,
  RightIcon,
  onRightPress,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        {Icon ? <Icon height={20} width={20} /> : null}
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor={COLORS.Primary_Placeholder}
            onChangeText={onChangeText}
            value={value}
            style={styles.description}
            {...props}
          />
        </View>
      </View>
      {RightIcon ? (
        <TouchableOpacity
          disabled={!onRightPress}
          onPress={onRightPress}
          style={styles.rightLogo}>
          <RightIcon height={20} width={20} />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default memo(EditProfileItem);

const styles = StyleSheet.create({
  container: {
    marginBottom: 27,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.Primary_Border,
  },
  body: {
    flex: 1,
    flexDirection: 'row',
  },
  content: {
    paddingLeft: 13,
  },
  title: {
    fontSize: 10,
    fontWeight: '400',
    color: COLORS.Primary_Placeholder,
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Light,
    minWidth: 195,
    marginTop: 2,
  },
  rightLogo: {
    alignSelf: 'center',
  },
});
