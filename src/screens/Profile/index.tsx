import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from 'types';
import {RootState, useSelector} from '~app';
import {BackHeader, Container, ProfileItem} from '~components';
import {COLORS, Icons, IMAGES} from '~constants';

export default function ProfileScreen({
  navigation,
}: StackScreenProps<'Profile'>) {
  const {
    auth: {user},
    loading: {isLoading},
  } = useSelector((state: RootState) => state);

  return (
    <Container showSpinner={isLoading}>
      <BackHeader
        title="My Profile"
        Icon={Icons.EditProfile}
        onRightPress={() => navigation.navigate('EditProfile')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <Image source={IMAGES.ProfilePic} style={styles.profilePic} />
          <ProfileItem title="Name" value={user?.name} Icon={Icons.MoreUser} />
          <ProfileItem
            title="Mobile"
            value={user?.phone_no}
            Icon={Icons.ProfileMobile}
          />
          <ProfileItem
            title="Email"
            value={user?.email}
            Icon={Icons.ProfileEmail}
          />
          <ProfileItem
            title="Date of birth"
            value={user?.date_of_birth}
            Icon={Icons.ProfileDOB}
          />
          <ProfileItem
            title="Gender"
            value={user?.gender}
            Icon={Icons.ProfileGender}
          />
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
    paddingHorizontal: 41,
  },
  content: {
    marginTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 25,
    borderRadius: 23,
    backgroundColor: COLORS.Dark_Card,
  },
  profilePic: {
    width: 84,
    height: 84,
    top: -42,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 100,
  },
});
