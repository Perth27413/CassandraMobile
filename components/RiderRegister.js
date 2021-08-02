import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'

const RiderRegister = () => {
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
              <View style={styles.registerBox}>
                <Text style={styles.textStyles}>Brand</Text>
                  <TextInput style={styles.input} />
                <Text style={styles.textStyles}>CC.</Text>
                  <TextInput style={styles.input} />
                <Text style={styles.textStyles}>Model</Text>
                  <TextInput style={styles.input} />
                <Text style={styles.textStyles}>Year</Text>
                  <TextInput style={styles.input} />
                <View style={styles.registerButton}>
                  <Text style={styles.textRegister}>Register</Text>
                </View>
              </View>
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
  registerBox: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 20,
    zIndex: 0,
    position: 'absolute',
    marginTop: 170,
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
  textStyles: {
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
  registerButton: {
    backgroundColor: '#18BCBE',
    width: 350,
    height: 60,
    marginTop: 50,
    right: 30,
    borderRadius: 10
  },
  textRegister: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15
  }
})

export default RiderRegister