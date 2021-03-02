import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
// import ImageViewer from 'react-native-image-zoom-viewer';

// const image = {
//   uri: `https://i.pinimg.com/originals/2e/ff/59/2eff594afb4bc106f224db18c03838fc.png`,
// };

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Image source={image} style={styles.image2} /> */}
      <View>
        <Text style={styles.image}>4LEAF SOFTWARE</Text>
      </View>
      <TextInput style={styles.inputText} placeholder="ID"></TextInput>
      <TextInput style={styles.inputText} placeholder="PASSWORD"></TextInput>

      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn2}>
          <Text>Find ID</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn2}>
          <Text>Find PASSWORD</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom2}>
        {/* <TouchableOpacity style={styles.btn2}>
          <Text>개인정보 처리방침</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.commonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn1}>
          <Text style={styles.commonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: `center`,
    alignItems: `center`,
  },
  inputText: {
    width: `80%`,
    borderWidth: 1,
    borderColor: `#0b0b0b`,
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  bottom: {
    width: `80%`,
    flexDirection: `row`,
    justifyContent: `space-between`,
  },
  bottom2: {
    width: `80%`,
    alignItems: `center`,
    marginTop: 40,
    marginBottom: 60,
  },
  btn1: {
    width: `47%`,
    height: 40,
    marginRight: 5,
    alignItems: `center`,
    justifyContent: `center`,
    backgroundColor: `#0b0b0b`,
    borderRadius: 5,
  },
  btn2: {
    width: 130,
    padding: 10,
  },
  commonText: {
    color: `#fff`,
  },
  image: {
    fontSize: 30,
    marginBottom: 80,
  },
  // image2: {
  //   resizeMode: 'contain',
  //   width: 100,
  //   height: 100,
  //   marginBottom: 80,
  // },
});

export default App;
