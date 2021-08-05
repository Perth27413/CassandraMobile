import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, TextInput, ActivityIndicator } from 'react-native'
import LottieView from 'lottie-react-native'

const Register = ({ navigation }) => {
    const [isLoading, setIsLoading] = React.useState(true)
    const [registerRequest, setregisterRequest] = React.useState({
        "userName": "",
        "password": "",
        "vehicle": 0,
        "email": "",
        "firstName": "",
        "lastName": "",
        "phoneNumber": "",
        "year": 0
    })

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
            setregisterRequest({...registerRequest, userName: 'IEIE'})
        }, 3000);
    }, []);

    const navigationNext = () => {
        navigation.navigate('riderRegister', registerRequest)
    }

    const loading = () => {
        return (
            <View style={styles.loading}>
                <LottieView
                    style={styles.animation}
                    speed={2.5}
                    source={require('../assets/47392-delivery-man-with-bike (1).json')}
                    autoPlay loop
                />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {isLoading ? loading() :
                <View style={{ flex: 1 }}>
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
                                <TextInput style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, userName: value})}/>
                                <Text style={styles.textLabal}>Password</Text>
                                <TextInput secureTextEntry={true} maxLength={10} style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, password: value})} />
                            </View>
                            <View style={styles.boxBottom}>
                                <Text style={styles.textLabal}>Email</Text>
                                <TextInput style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, email: value})} />
                                <Text style={styles.textLabal}>First name</Text>
                                <TextInput style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, firstName: value})}/>
                                <Text style={styles.textLabal}>last name</Text>
                                <TextInput style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, lastName: value})}/>
                                <Text style={styles.textLabal}>Phone number</Text>
                                <TextInput style={styles.input} onChangeText={value => setregisterRequest({...registerRequest, phoneNumber: value})}/>
                            </View>
                            <TouchableHighlight onPress={() => navigationNext()} style={styles.buttonHighlight}>
                                <View style={styles.nextButton}>
                                    <Text style={styles.textNext}>Next</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>}
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
    },
    loading: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: '#18BCBE'
    },
    animation: {
        width: 150,
        height: 150,

    },
})

export default Register