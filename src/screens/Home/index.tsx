import React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';
import {
  Banner,
  Header,
  HomeTopNews,
  PopularShow,
  TitleAndMore,
} from '~components';
import {COLORS, DATA, IMAGES} from '~constants';
import {TabScreenProps} from 'types';

export default function HomeScreen({navigation}: TabScreenProps<'Home'>) {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.content}>
        <Banner data={DATA.Banners} />
        <View style={styles.body}>
          <TitleAndMore
            title="Heigh 5 News"
            onPress={() => navigation.navigate('News')}
          />
          <FlatList
            data={DATA.NewsData}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({item}) => (
              <HomeTopNews title={item.title} image={IMAGES.HighNews} />
            )}
          />
          <TitleAndMore
            title="Popular Web Shows"
            onPress={() => navigation.navigate('TV')}
          />
          <FlatList
            data={DATA.LiveNews}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => <PopularShow image={IMAGES.HighNews} />}
          />
          <TitleAndMore
            title="Popular Audio Dramas"
            onPress={() => navigation.navigate('FM')}
          />
          <FlatList
            data={DATA.LiveNews}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(_, index) => index.toString()}
            renderItem={() => <PopularShow image={IMAGES.HighNews} />}
          />
        </View>
      </ScrollView>
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
    paddingTop: 5,
  },
  body: {
    padding: 20,
    paddingBottom: 0,
  },
});
