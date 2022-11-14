import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Container} from '~common';
import {logout, useActions} from '~app';
import {StackScreenProps} from 'types';

export default function LogoutScreen({navigation}: StackScreenProps<'Logout'>) {
  const dispatch = useActions();

  useEffect(() => {
    dispatch(logout()).then(() => {
      navigation.reset({
        index: 0,
        routes: [{name: 'Login'}],
      });
    });
  }, [dispatch, navigation]);

  return (
    <Container showSpinner={true}>
      <ActivityIndicator />
    </Container>
  );
}
