import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, Icons} from '~constants';

interface Props {
  title?: string;
  showDot?: boolean;
}

const Header: FC<Props> = ({title, showDot = false}) => {
  return (
    <View style={styles.header}>
      {!title ? (
        <View style={styles.logo}>
          <Icons.Logo height={22} width={38} />
          <Text style={styles.logoTitle}>Let's Live</Text>
        </View>
      ) : (
        <View style={styles.left}>
          {showDot && <Icons.Ellipse style={styles.ellipse} />}
          <Text style={styles.title}>{title}</Text>
        </View>
      )}
      <View style={styles.headerRight}>
        <TouchableOpacity style={styles.search}>
          <Icons.Search width={22} height={22} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icons.UserPic width={30} height={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ellipse: {
    marginRight: 5,
  },
  logoTitle: {
    fontSize: 6,
    fontWeight: '400',
    textAlign: 'center',
    color: COLORS.Primary,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: COLORS.Light,
    lineHeight: 27,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  search: {
    marginRight: 32,
  },
});
