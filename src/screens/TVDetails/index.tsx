import React from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from 'types';
import {Container, DetailsHeader, TitleAndMore, VideoPlayer} from '~components';
import {COLORS, DATA, Icons, IMAGES} from '~constants';

export default function TVDetailsScreen({
  navigation,
}: StackScreenProps<'TVDetails'>) {
  const isFav = false;

  return (
    <Container showSpinner={false}>
      <DetailsHeader title="B4U Movies" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Video Player */}
        <VideoPlayer />
        <View style={styles.body}>
          <View style={styles.header}>
            <View style={styles.leftSide}>
              <Image source={IMAGES.B4u} style={styles.logo} />
              <Text style={styles.title}>B4U Movies</Text>
            </View>
            <TouchableOpacity>
              {!isFav ? (
                <Icons.HeartAdd height={24} width={24} />
              ) : (
                <Icons.Heart height={24} width={24} />
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.description}>
            Duis non congue ex, ut pulvinar ligula. In egestas lacus id
            vestibulum consectetur. Nam nunc quam, tincidunt at enim a, finibus
            laoreet metus.
          </Text>
          <View style={styles.divider} />
        </View>
        <TitleAndMore
          title="More tv channels like this"
          onPress={() => navigation.navigate('Tab')}
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
        <TitleAndMore
          title="Popular channels"
          onPress={() => navigation.navigate('Tab')}
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
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  body: {
    //flex: 1,
    marginTop: 24,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 61,
    height: 61,
    resizeMode: 'cover',
    borderRadius: 100,
    borderWidth: 1,
    borderColor: COLORS.Primary_Border,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.Light,
    marginLeft: 15,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Light,
    marginTop: 12,
    marginHorizontal: 5,
  },
  divider: {
    height: 1,
    marginTop: 28,
    marginBottom: 22,
    backgroundColor: COLORS.Secondary_Border,
  },
  footer: {
    marginVertical: 10,
    marginBottom: 15,
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
