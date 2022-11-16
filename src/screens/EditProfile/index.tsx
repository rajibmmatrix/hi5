import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from 'types';
import {BackHeader, Button, Container, EditProfileItem} from '~components';
import {COLORS, Icons, IMAGES} from '~constants';

interface IProfile {
  name: string;
  email: string;
  mobile: string;
  dob: string;
  gender: string;
}

export default function EditProfileScreen({}: StackScreenProps<'EditProfile'>) {
  const [profile, setProfile] = useState<IProfile>({
    name: '',
    email: '',
    mobile: '',
    dob: '',
    gender: '',
  });

  const handleChange = (name: string, value: string) => {
    setProfile(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = () => {};

  const handleProfilePic = () => {};

  return (
    <Container showSpinner={false}>
      <BackHeader title="My Profile" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.profilePicContainer}>
            <Image source={IMAGES.ProfilePic} style={styles.profilePic} />
            <TouchableOpacity onPress={handleProfilePic} style={styles.editPic}>
              <Icons.EditProfile width={18} height={18} />
            </TouchableOpacity>
          </View>
          <EditProfileItem
            title="Name"
            placeholder="Enter your name"
            Icon={Icons.MoreUser}
            onChangeText={(e: string) => handleChange('name', e)}
            value={profile.name}
          />
          <EditProfileItem
            title="Mobile"
            placeholder="Enter your mobile"
            Icon={Icons.ProfileMobile}
            onChangeText={(e: string) => handleChange('mobile', e)}
            value={profile.mobile}
          />
          <EditProfileItem
            title="Email"
            placeholder="some@mail.com"
            Icon={Icons.ProfileEmail}
            onChangeText={(e: string) => handleChange('email', e)}
            value={profile.email}
          />
          <EditProfileItem
            title="Date of birth"
            placeholder="dd/mm/yyyy"
            Icon={Icons.ProfileDOB}
            RightIcon={Icons.Calendar}
            value={profile.dob}
          />
          <EditProfileItem
            title="Gender"
            placeholder="Male | Female"
            Icon={Icons.ProfileGender}
            RightIcon={Icons.Arrowdown}
            value={profile.gender}
          />
          <View style={styles.buttonContainer}>
            <Button onPress={handleSubmit} title="Save changes" />
          </View>
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
    paddingBottom: 60,
    paddingHorizontal: 25,
    borderRadius: 23,
    backgroundColor: COLORS.Dark_Card,
  },
  profilePicContainer: {
    top: -42,
    width: 84,
    height: 84,
    alignSelf: 'center',
  },
  profilePic: {
    width: 84,
    height: 84,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  editPic: {
    width: 34,
    height: 34,
    right: -1,
    bottom: -1,
    zIndex: 999,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.Dark_Card,
    borderRadius: 100,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: -26,
    alignSelf: 'center',
  },
});
