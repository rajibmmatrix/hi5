import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {BackHeader, Container} from '~components';

export default function EditProfileScreen() {
  return (
    <Container showSpinner={false}>
      <BackHeader title="My Profile" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Edit Profile Screen</Text>
        </View>
      </ScrollView>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {},
  content: {},
  title: {},
});
