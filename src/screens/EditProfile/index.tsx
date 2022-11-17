import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';
import {StackScreenProps} from 'types';
import {RootState, signup, useActions, useSelector} from '~app';
import {
  BackHeader,
  Button,
  Container,
  EditProfileItem,
  SelectImage,
} from '~components';
import {COLORS, Icons, IMAGES} from '~constants';

interface IProfile {
  name: string;
  email: string;
  phone_no: string;
  date_of_birth: string;
  gender: string;
}

export default function EditProfileScreen({}: StackScreenProps<'EditProfile'>) {
  const dispatch = useActions();
  const {
    auth: {user},
    loading: {isLoading},
  } = useSelector((state: RootState) => state);
  const [profile, setProfile] = useState<IProfile>({
    name: user?.name ? user.name : '',
    email: user?.email ? user.email : '',
    phone_no: user?.phone_no ? user.phone_no : '',
    date_of_birth: user?.date_of_birth ? user.date_of_birth : '',
    gender: user?.gender ? user.gender : '',
  });

  const handleChange = (name: string, value: string) => {
    setProfile(prev => ({...prev, [name]: value}));
  };

  const handleSubmit = () => {
    dispatch(signup({...profile, full_name: profile.name}));
  };

  const handleProfilePic = (image: any) => {
    console.log(image);
  };

  return (
    <Container showSpinner={isLoading}>
      <BackHeader title="My Profile" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <View style={styles.profilePicContainer}>
            <Image source={IMAGES.ProfilePic} style={styles.profilePic} />
            <SelectImage
              onChooseImage={handleProfilePic}
              style={styles.editPic}>
              <Icons.EditProfile width={18} height={18} />
            </SelectImage>
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
            onChangeText={(e: string) => handleChange('phone_no', e)}
            value={profile.phone_no}
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
            onChangeText={(e: string) => handleChange('date_of_birth', e)}
            value={profile.date_of_birth}
          />
          <EditProfileItem
            title="Gender"
            placeholder="Male | Female"
            Icon={Icons.ProfileGender}
            RightIcon={Icons.Arrowdown}
            onChangeText={(e: string) => handleChange('gender', e)}
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
