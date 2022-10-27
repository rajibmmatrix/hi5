import React from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Filters, Header} from '~components';
import {COLORS, DATA} from '~constants';

export default function FMScreen() {
  return (
    <View style={styles.container}>
      <Header title="FM Radio Channnels" />
      <Filters />
      <View style={styles.content}>
        <FlatList
          data={DATA.FMData}
          numColumns={2}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
            </View>
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
    width: '100%',
    minWidth: 190,
    minHeight: 190,
    resizeMode: 'cover',
    borderRadius: 10,
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
