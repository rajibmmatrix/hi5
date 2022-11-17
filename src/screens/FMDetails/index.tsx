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
import LinearGradient from 'react-native-linear-gradient';
import {StackScreenProps} from 'types';
import {Container, DetailsHeader, TitleAndMore} from '~components';
import {COLORS, DATA, Icons, IMAGES} from '~constants';

export default function FMDetailsScreen({
  navigation,
}: StackScreenProps<'FMDetails'>) {
  const isFav = false;

  return (
    <Container showSpinner={false}>
      <DetailsHeader title="Radio Milan" />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {/* Video Player */}
        <View style={styles.main}>
          <Image source={IMAGES.FM1} style={styles.logo} />
        </View>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>Radio Milan</Text>
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
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={COLORS.Primary_Gradient}
            style={styles.playContent}>
            <TouchableOpacity>
              <Icons.VideoPlay height={39} width={39} />
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <TitleAndMore
          title="More radio channels like this"
          onPress={() => navigation.navigate('Tab')}
        />
        <View style={styles.footer}>
          <FlatList
            horizontal={true}
            data={DATA.FMData}
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
  main: {
    height: 224,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: COLORS.Light,
    borderColor: COLORS.Primary_Border,
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  body: {
    //flex: 1,
    marginTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.Light,
  },
  description: {
    fontSize: 12,
    fontWeight: '400',
    color: COLORS.Light,
    marginTop: 16,
    marginHorizontal: 5,
  },
  divider: {
    height: 1,
    marginTop: 20,
    backgroundColor: COLORS.Secondary_Border,
  },
  playContent: {
    height: 55,
    width: '100%',
    borderRadius: 39,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginVertical: 34,
  },
  footer: {
    marginVertical: 10,
    marginBottom: 15,
  },
  item: {
    width: 145,
    height: 145,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain',
  },
});
