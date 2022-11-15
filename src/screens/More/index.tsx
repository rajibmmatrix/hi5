import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabScreenProps} from 'types';
import {RootState, useSelector} from '~app';
import {Container, MoreItem} from '~components';
import {COLORS, Icons} from '~constants';

export default function MoreScreen({navigation}: TabScreenProps<'More'>) {
  const {user, isLoggedin} = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLoggedin) {
      navigation.replace('Login');
    }
  }, [isLoggedin, navigation]);

  return (
    <Container showSpinner={false}>
      <View style={styles.header}>
        <View style={styles.leftSide}>
          <Icons.ProfilePic width={29} height={29} />
          <Text style={styles.title}>{user?.name}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Icons.MoreArrowRight width={18} height={18} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.content}>
        <MoreItem title="Buy plan" Icon={Icons.BuyPlan} onPress={() => {}} />
        <MoreItem
          title="My subscription"
          Icon={Icons.MySubscription}
          onPress={() => {}}
        />
        <MoreItem
          title="My transaction"
          Icon={Icons.BuyPlan}
          onPress={() => {}}
        />
        <MoreItem title="Favorites" Icon={Icons.Favorite} onPress={() => {}} />
        <MoreItem title="Settings" Icon={Icons.BuyPlan} onPress={() => {}} />
        <MoreItem
          title="Support & feedback"
          Icon={Icons.SupportFeedback}
          onPress={() => {}}
        />
        <MoreItem
          title="Tell a friend about this app"
          Icon={Icons.MoreUser}
          onPress={() => {}}
        />
        <MoreItem
          title="Logout"
          Icon={Icons.Logout}
          onPress={() => navigation.navigate('Logout')}
        />
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: COLORS.Secondary_Background,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 11,
    fontWeight: '400',
    color: COLORS.Light,
    textAlign: 'center',
    marginLeft: 10,
  },
  content: {
    flex: 1,
    paddingLeft: 26,
    marginVertical: 20,
    paddingHorizontal: 22,
  },
});
