import React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from 'types';
import {BackHeader, Container, ProfileItem} from '~components';
import {COLORS, Icons, IMAGES} from '~constants';

export default function ProfileScreen({
  navigation,
}: StackScreenProps<'Profile'>) {
  return (
    <Container showSpinner={false}>
      <BackHeader
        title="My Profile"
        Icon={Icons.EditProfile}
        onRightPress={() => navigation.navigate('EditProfile')}
      />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <Image source={IMAGES.ProfilePic} style={styles.profilePic} />
          <ProfileItem
            title="Name"
            value="Milan Chakraborty"
            Icon={Icons.MoreUser}
          />
          <ProfileItem
            title="Mobile"
            value="9870 000 333"
            Icon={Icons.ProfileMobile}
          />
          <ProfileItem
            title="Email"
            value="milan@gmail.com"
            Icon={Icons.ProfileEmail}
          />
          <ProfileItem
            title="Date of birth"
            value="02/09/1990"
            Icon={Icons.ProfileDOB}
          />
          <ProfileItem title="Gender" value="Male" Icon={Icons.ProfileGender} />
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
