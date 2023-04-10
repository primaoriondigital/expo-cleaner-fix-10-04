/* eslint-disable prettier/prettier */
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import React, {Component,useState,useEffect} from 'react'
import {Pressable, Text, StyleSheet, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from "react-native";
import Clean from '../../assets/jsx/Clean';
const colors = ['#F05941']
const textColor = ['#000000']


const Home = ({navigation, route}) => {
const [count, setCount] = useState(0);
var [cleaner_id,setId] = useState('')
const [booked, setBooked] = useState('')
const [urgent, setUrgent] = useState('')
const [refreshCount, setRefreshCount] = useState(0);

useEffect(() => {
    const fetchOrderUrgent = async () => {
      try {
        const link = `https://wild-lime-sweatpants.cyclic.app/order/get-urgent`
        const response = await fetch(link)
        const data = await response.json()
        setUrgent(data.data)
      } catch (error) {
      }
    }
    fetchOrderUrgent()
    const intervalId = setInterval(() => {
        setCount(count => count + 1);
      }, 7000);
    return () => clearInterval(intervalId);
  },[count])

  useEffect(() => {
    AsyncStorage.getItem("id").then((value) => {
    return setId(value)
    })
    const fetchOrderBooked = async () => {
      try {
        const link1 = `https://wild-lime-sweatpants.cyclic.app/order/get-booking-detail/${cleaner_id}`
        const response1 = await fetch(link1)
        const data1 = await response1.json()
        setBooked(data1.data)
      } catch (error) {
      }
    }
    fetchOrderBooked()
    const intervalId = setInterval(() => {
        setCount(count => count + 1);
      }, 7000);
    return () => clearInterval(intervalId);
  },[count])

  var home1 = 'dari home'
// console.log(booked)
    return(
        <View style={styles.ContainerMain}>
            <LinearGradient colors={['#FFFFFF', '#F5F2FF']} style={styles.BottomGradient} start={{x:0, y:0.0}} end={{x: 0, y: 0.81}}>
            </LinearGradient>
            <LinearGradient
            colors={['#5865F2', '#DD7DE1']}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.TopBar}>
                <Text style={styles.Text}>
                    Home
                </Text>
            </LinearGradient>
            <View style={styles.JobBox}>
                {/* <Job jobState={3}/>
                <Job jobState={0}/>
                <Job jobState={1}/>
                <Job jobState={2}/> */}
            </View>
            <View height = '70%' flexGrow = {1} style={{ paddingBottom: hp("12%"),}}>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
            <View>
                {urgent ? (
                    // <Text>{urgent.order_id}</Text>
                    <View>{urgent.map((urgent) => {
                        return (
                            // <View>
                            //     <Text>{urgent.order_id}</Text>
                            // </View>
                            <View style={styles.container()}
                            key = {urgent.order_id}>
                            <View style={styles.CleanBox}
                            key = {urgent.order_id}>
                            <Clean/>
                            </View>
                            <View style={styles.TextBox}                        >
                            <Text style={[styles.TaskText]}>{urgent.item_name}</Text>
                            <Text style={{fontSize: 10,}}>{urgent.order_id}</Text>
                            <Text style={{fontSize: 10,}}>{urgent.address}</Text>
        </View>
        <Pressable onPress={
            () => navigation.navigate("NavOne",{order_id: urgent.order_id,home : home1})
        } 
        style={styles.Action}>
            <Text style={styles.TextStyle}>{urgent.order_status ? ("Take it!") : ("tidak ada")}</Text>
        </Pressable>
        </View>
                        )
                    })}</View>
                ) : (
                    <Text>Tidak Ada Orderan Urgent</Text>
                )}
            </View>
            <View>
            {booked ? (
                    <View>{booked.map((booking) => {
                        return (
                            <View style={styles.container()}
                            key = {booking.order_id}>
                            <View style={styles.CleanBox}
                            key = {booking.order_id}>
                            <Clean/>
                            </View>
                            <View style={styles.TextBox}                        >
                            <Text style={[styles.TaskText]}>{booking.item_name}</Text>
                            <Text style={{fontSize: 10,}}>{booking.order_id}</Text>
                            <Text style={{fontSize: 10,}}>{booking.address}</Text>
        </View>
        {/* <Text>ini job</Text> */}
        <Pressable onPress={() => {navigation.navigate("NavOne",{order_id: booking.order_id,home : home1})}
        } 
        style={[styles.Action,{
            backgroundColor: '#F05941'}]}>
            <Text style={styles.TextStyle}>{booking.order_status ? ("Confirm!") : ("tidak ada")}</Text>
        </Pressable>
        </View>
                        )
                    })}</View>
                ) : (
                    <Text>Tidak Ada Orderan Urgent</Text>
                )}
            </View>
            </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    ContainerMain: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    TopBar: {
        height: 90,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    JobBox: {
        marginTop: 15,
    },
    Text: {
        color: '#FFFFFF',
        fontFamily: 'Ubuntu-Medium',
        fontSize: 24,
        fontWeight: 700,
    },
    BottomGradient:{
        width: '100%',
        height: '20%',
        position:'absolute',
        bottom: 0,
    },
    BottomMenu: {
        bottom: 0,
        position: 'absolute',
        marginBottom: 15,
    },
    NavOne: {
        position: 'relative',
        alignSelf: 'center'
    },
    Searcher: {
        
    },
    Prof: {
        position: 'absolute',
        top: 22,
        right: 27,
    },
    Msg: {
        position: 'absolute',
        top: 25,
        left: 29,
    },
    container: (bg) => {
        const bgcolor = colors[bg]
        return {
        width: 300,
        height: 116,
        borderRadius: 10,
        marginTop: 15,
        // backgroundColor: bgcolor,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#DA7DE1',
        borderWidth: 3
    }},
    CleanBox: {
        width: 56,
        height: 56,
        borderRadius: 10,
        backgroundColor: '#DA7DE1',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 14,

    },
    TextBox: {
        marginLeft: -6,
        width: 130,
        height: 56,
        justifyContent: 'center',

    },
    TaskText: {
        fontFamily: 'Ubuntu-Bold',
        fontSize: 11,
        fontWeight: '400',
        letterSpacing: 1,
    },
    Action: {
        width: 63,
        height: 63,
        borderRadius: 10,
        position: 'absolute',
        right: 0,
        margin: 14,
        backgroundColor: '#4FC76D',
        alignItems: 'center',
        justifyContent: 'center'

    },
    TextStyle: {
        fontFamily: 'Ubuntu-Medium',
        fontSize: 10,
        color: '#FFF',
        fontWeight: '700',
        letterSpacing: 1,
    }
})

export default Home