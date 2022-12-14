import React, {Fragment} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {Header, NewsLive, NewsPaper, TitleAndMore} from '~components';
import {COLORS, DATA} from '~constants';
import {TabScreenProps} from 'types';

export default function NewsScreen({navigation}: TabScreenProps<'News'>) {
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
                <NewsLive
                  title={item.title}
                  onPress={() => navigation.navigate('TVDetails', {id: '1'})}
                />
              )}
            </Fragment>
          ))}
        </View>
        <TitleAndMore
          title="Live News Channels"
          onPress={() => navigation.navigate('TV')}
        />
        <View style={styles.footer}>
          <FlatList
            horizontal={true}
            data={DATA.LiveNews}
            bounces={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('TVDetails', {id: '1'})}>
                <View style={styles.item}>
                  <Image source={item.image} style={styles.image} />
                </View>
              </TouchableOpacity>
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
