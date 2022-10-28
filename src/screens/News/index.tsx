import React, {Fragment} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {Header, NewsLive, NewsPaper, TitleAndMore} from '~components';
import {COLORS, DATA} from '~constants';

export default function NewsScreen() {
  return (
    <View style={styles.container}>
      <Header title="News" />
      <ScrollView
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={styles.content}>
        <View style={styles.body}>
          {DATA.NewsData.map((item, index) => (
            <Fragment key={index.toString()}>
              {item.isNewsPaper ? (
                <NewsPaper
                  title={item.title}
                  description={item.description}
                  onPress={() => {}}
                />
              ) : (
                <NewsLive title={item.title} onPress={() => {}} />
              )}
            </Fragment>
          ))}
        </View>
        <TitleAndMore title="Live News Channels" onPress={() => {}} />
        <View style={styles.footer}>
          <FlatList
            horizontal={true}
            data={DATA.LiveNews}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <View style={styles.item}>
                <Image source={item.image} style={styles.image} />
              </View>
            )}
            keyExtractor={(_, index) => index.toString()}
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
    marginTop: 10,
    paddingHorizontal: 20,
  },
  body: {
    marginBottom: 10,
  },
  footer: {
    marginVertical: 10,
  },
  item: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 100,
    resizeMode: 'contain',
  },
});
