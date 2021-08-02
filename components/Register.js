import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native'

const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.head} />
            <View style={styles.main}>
                <View style={styles.home}>
                    <Text style={styles.textCassandra}>Cassandra</Text>
                    <View style={styles.switchButton}>
                        <View style={styles.buttonRegister}>
                            <Text style={styles.textButtonRegister}>Register</Text>
                        </View>
                        <View style={styles.buttonLogin}>
                            <Text style={styles.textButtonlogin}>Login</Text>
                        </View>
                    </View>
                    <View style={styles.boxTop}>
                        <Text style={styles.textLabal}>Username</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.textLabal}>Password</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <View style={styles.boxBottom}>
                        <Text style={styles.textLabal}>Email</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.textLabal}>First name</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.textLabal}>last name</Text>
                        <TextInput style={styles.input} />
                        <Text style={styles.textLabal}>Phone number</Text>
                        <TextInput style={styles.input} />
                    </View>
                    <TouchableHighlight onPress={() => navigation.navigate('riderRegister')} style={styles.buttonHighlight}>
                        <View style={styles.nextButton}>
                            <Text style={styles.textNext}>Next</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    ) 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
        backgroundColor: '#18BCBE',
        height: 250
    },
    main: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    home: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    textCassandra: {
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 30,
        marginTop: 20,
    },
    switchButton: {
        marginTop: 20,
        padding: 6,
        backgroundColor: '#fff',
        flexDirection: 'row',
        width: 300,
        height: 50,
        borderRadius: 30,
    },
    buttonRegister: {
        alignItems: 'center',
        width: '50%',
        backgroundColor: '#18BCBE',
        borderRadius: 30,
    },
    buttonLogin: {
        alignItems: 'center',
        width: '50%',
        borderRadius: 30,
    },
    textButtonRegister: {
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff',
        marginTop: 6,
    },
    textButtonlogin: {
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#C4C4C4',
        marginTop: 6,
    },
    boxTop: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        zIndex: 0,
        position: 'absolute',
        marginTop: 150,
        backgroundColor: '#ffffff',
        width: 350,
        height: 175,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.85,
        shadowRadius: 2,
        elevation: 1
    },
    boxBottom: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        zIndex: 0,
        position: 'absolute',
        marginTop: 340,
        backgroundColor: '#ffffff',
        width: 350,
        height: 320,
        borderRadius: 10,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.85,
        shadowRadius: 2,
        elevation: 1
    },
    buttonHighlight: {
        position: 'absolute',
        bottom: 30,
        borderRadius: 10,
    },
    nextButton: {
        backgroundColor: "#18BCBE",
        width: 340,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
    },
    textNext: {
        marginTop: 10,
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
    },
    textLabal: {
        fontFamily: 'Roboto-Bold',
        fontWeight: 'bold',
        fontSize: 14,
        marginBottom: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        height: 40,
        borderColor: '#C4C4C4',
        marginBottom: 10,
    }
})

export default Register