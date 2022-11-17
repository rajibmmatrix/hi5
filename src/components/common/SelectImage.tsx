import React, {FC, memo, useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  ImageLibraryOptions,
  launchImageLibrary,
} from 'react-native-image-picker';
import {COLORS} from '~constants';
import {api} from '~services';

interface Props {
  children?: JSX.Element | JSX.Element[];
  onChooseImage: (e: object) => void;
  style: ViewStyle;
}

const options: ImageLibraryOptions = {
  mediaType: 'photo',
  quality: 0,
  maxHeight: 200,
  maxWidth: 200,
  includeBase64: false,
  selectionLimit: 1,
};

const SelectImage: FC<Props> = ({children, onChooseImage, style}) => {
  const [modalVisible, setModalVisible] = useState(false);

  const chooseFile = () => {
    launchImageLibrary(options, (response: any) => {
      if (response?.assets?.length !== 0) {
        handleUpload(response.assets[0]);
      } else {
        console.log('User cancelled image picker');
      }
    });
  };

  const chooseCamera = () => {
    launchImageLibrary(options, (response: any) => {
      if (response?.assets?.length !== 0) {
        handleUpload(response.assets[0]);
      } else {
        console.log('User cancelled image picker');
      }
    });
  };

  const handleUpload = (image: any) => {
    let data = new FormData();
    data.append('image', {
      name: image.fileName,
      uri: image.uri,
      type: image.type,
    });
    api
      .imageUpload(data)
      .then(res => {
        onChooseImage(res.data?.data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <TouchableOpacity style={style} onPress={() => setModalVisible(true)}>
        {children}
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.container}>
          <View style={styles.body}>
            <Text style={styles.title}>Select Image</Text>
            <Pressable
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                chooseCamera();
              }}>
              <Text style={styles.buttonTitle}>Take Photo...</Text>
            </Pressable>
            <Pressable
              style={styles.button}
              onPress={() => {
                setModalVisible(false);
                chooseFile();
              }}>
              <Text style={styles.buttonTitle}>Choose from Library...</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={[styles.buttonTitle, styles.cancel]}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default memo(SelectImage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  body: {
    margin: 20,
    width: '80%',
    backgroundColor: COLORS.Light,
    borderRadius: 5,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.Dark,
    marginBottom: 5,
  },
  button: {
    paddingVertical: 15,
    elevation: 2,
  },
  buttonTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.Dark,
  },
  cancel: {
    alignSelf: 'flex-end',
    color: COLORS.Primary,
    marginRight: 15,
    marginBottom: 10,
  },
});
