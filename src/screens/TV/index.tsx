import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {TabScreenProps} from 'types';
import {Filters, Header} from '~components';
import {COLORS, DATA} from '~constants';

export default function TVScreen({navigation}: TabScreenProps<'TV'>) {
  return (
    <View style={styles.container}>
      <Header title="Live TV" showDot />
      <Filters />
      <View style={styles.content}>
        <FlatList
          data={DATA.LiveNews}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('TVDetails', {id: '1'})}>
              <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.Primary_Background,
  },
  content: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
  },
  item: {
    flex: 1,
    margin: 5,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 170,
    height: 170,
    resizeMode: 'cover',
    borderRadius: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 21,
    color: COLORS.Light,
    textAlign: 'center',
    marginTop: 10,
  },
});
