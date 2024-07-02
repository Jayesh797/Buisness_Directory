import { Colors } from '@/constants/Colors'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'


export default function LoginPage() {
    return (
        <View style={styles.outercontainer}>
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <Image source={require('./../assets/images/girl2.png')} style={{
                    padding: 300
                }} />
                <View style={styles.maincontainer}>
                    <Text style={styles.container}>Your Ultimate <Text style={styles.subcontainer}>Community Buisness Directory</Text>App</Text>
                    <View>
                        <Text style={styles.tagline}>Find your Favorite buisness near you and post your own buisness to your community</Text>
                    </View>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btntext}>Let's get started</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    maincontainer: {
        padding: 20,
    },
    container: {
        fontSize: 30,
        fontFamily: 'Outfit-Bold'
    },
    subcontainer: {
        color: Colors.primary
    },
    tagline: {
        marginTop:10 ,
        fontSize: 17,
        color:Colors.gray,
        fontFamily: 'Outfit'
    },
    btn:
    {
        backgroundColor:Colors.primary,
        padding:14,
        borderRadius:99,
        marginTop:10
    },
    btntext:{
        textAlign:'center',
        fontFamily:'Outfit-Medium',
        color:'#fff',
        fontSize:15
    }
})

