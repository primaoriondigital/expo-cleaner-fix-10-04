import { StyleSheet, View, Text, Pressable, KeyboardAvoidingView, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect,useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import Gap from '../../components/Gap'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
// import auth from '../../config';
// import {signInWithEmailAndPassword} from "firebase/auth";


const Login = ({navigation}) => {

  const [phone, setPhone] = useState('');
  const email = (`${phone}@gmail.com`);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    try {
      console.log("menajalankan login")

      // signInWithEmailAndPassword(auth, email, password).then((result) => console.log("ini login database",result))
      console.log("data",{phone,password,email})
      const link = 'https://wild-lime-sweatpants.cyclic.app/users/login'
      const response = await fetch(link, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone,
          password,
        }),
      });
      // console.log("response")
      const data = await response.json();
      console.log('Response data:', data.data);

        if (data.data) {
        await AsyncStorage.setItem('id', data.data.id);
        await AsyncStorage.setItem('name', data.data.name);
        await AsyncStorage.setItem('phone', data.data.phone);
        console.log('Response data:', data.data.id);
        navigation.navigate('Home')
      } 
      else {
        setErrorMessage(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.backgroundgradient}>
        <LottieView 
          source={require('../../../assets/animation/kilapin.json')}
          autoPlay
          loop
        style={styles.namelogo}/>
          <View style={styles.TopBar}>
          </View>
          <View style={styles.shape}>
          <Gap height={30} />
          {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
            <Gap height={16} />
            <TextInput style={styles.InputStyle} onChangeText={setPhone} value={phone} placeholder={'Phone Number'}/>
            <Gap height={16} />
            <TextInput style={styles.InputStyle} onChangeText={setPassword} value={password} placeholder={'Password'}/>
            <Text style={styles.maintext}>Lupa password</Text>
            <Pressable style={styles.press} 
            onPress={handleLogin}>
              <Text style={styles.buttontext} 
              onPress={handleLogin}>SIGN IN</Text>
            </Pressable>
            <View style={styles.accsignup}>
              <Text>Tidak punya akun? &nbsp; </Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')} ><Text style={styles.daftartext}>Daftar</Text></TouchableOpacity>
            </View>
            <Gap height={20} />
          </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
  },
  backgroundgradient: {
      flex: 1,
      backgroundColor: "white"
  },
  namelogo: {
    marginTop: "-42%",
  },
  TopBar: {
    height: hp('45%'),
    alignItems: 'center',
    justifyContent: 'center'
  },
  shape: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    alignSelf: 'stretch',
    textAlign: 'center',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  maintext: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: '#5865F2',
    fontFamily: 'Ubuntur',
    fontSize: 16,
    marginTop: 20,
    width: 300,
    marginBottom: -5,
  },
  InputStyle: {
    width: '80%',
    height: 50,
    borderRadius: 25,
    borderColor: '#8D8D8D',
    borderWidth: 0.7,
    paddingLeft: 20
  },
  press: {
    justifyContent: 'center',
    marginTop: '4%',
    backgroundColor: '#DA7DE1',
    height: 51,
    borderRadius:30,
    width: 300,
  },
  buttontext:{
    color: '#fff',    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Ubuntu-Bold',
    fontSize: 16,
  },
  googlepress: {
    justifyContent: 'center',
    marginTop: 20,
    backgroundColor: '#fff',
    height: 51,
    borderRadius:30,
    width: 300,
    borderWidth: 1.5,
    borderColor: '#505050'
  },
  googlebuttontext: {
    color: '#505050',    
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Ubuntum',
    fontSize: 16,
  },
  accsignup: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  daftartext: {
    color: '#DA7DE1',
    justifyContent: 'center', 
    alignContent: 'center', 
    alignItems: 'center',
  },
})

export default Login