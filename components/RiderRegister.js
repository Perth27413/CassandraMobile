import React, { useState } from 'react'
import LottieView from 'lottie-react-native'
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native'
import {Picker} from '@react-native-picker/picker';
import RNPickerSelect from 'react-native-picker-select';
import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk';
import Axios from 'axios'

class RiderRegister extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      vehicle: [],
      brand: "",
      cc: "",
      model: "",
      modelLists: [],
      registerRequest: {
        "userName": "",
        "password": "",
        "vehicle": 0,
        "email": "",
        "firstName": "",
        "lastName": "",
        "phoneNumber": "",
        "year": 0
      }
    }
    
  }

  navigationNext = () => {
    console.log(this.state.registerRequest)
    let params = this.postRegister()
    this.setState({
      isLoading: true
    })
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
      this.props.navigation.navigate('home', { response: params } )
    }, 2300);
  }

  componentDidMount() {
    console.log(this.props.route.params)
    this.setState({
      registerRequest: this.props.route.params
    })
    this.getVehicleData()
    this.forceUpdate()
  }

  postRegister = async() => {
    let response = await Axios.post('https://fsk328moy9.execute-api.ap-southeast-1.amazonaws.com/dev/register', this.state.registerRequest)
    console.log(response.data)
    return response.data
  }

  getVehicleData = async() => {
    try {
      let response = await Axios('https://fsk328moy9.execute-api.ap-southeast-1.amazonaws.com/dev/user/vehicle')
      this.setState({
        vehicle: response.data,
        isLoading: false
      })
    } catch {
      console.log('Error Fetch Data')
    }
  }

  mapResponseToUseObject = async(response) => {
    let results = []
    for (const item of response) {
      let brand = item.brand[0].brand
      if (results.some(e => e.brand === brand)) {
        let index = results.findIndex(e => e.brand === brand)
        results[index].types.push(item.brand[0].type[0])
      } else {
        let object = {
          brandId: item.brand[0].brandId,
          brand: item.brand[0].brand,
          types: item.brand[0].type
        }
        results.push(object)
      }
    }
    return results
  }

  getModelFromBrandAndType = () => {
    var modelArr = []
    if (this.state.brand && this.state) {
      this.state.vehicle.filter(e => e.brand === this.state.brand)[0].type.filter(e => e.type === this.state.cc)[0].model.map(item => {
        modelArr.push(item)
      })
      this.setState({
        modelLists: modelArr
      })
    }
  }

  onBrandSelect = (value) => {
    this.setState({
      brand: value,
      cc: '',
      model: ''
    })
  }

  onTypeSelect = (value) => {
    this.setState({cc: value}, () => {
      this.getModelFromBrandAndType()
    })

  }

  loading = () => {
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

  render() {
    return (
      <View style={styles.container} >
        {this.state.isLoading ? this.loading() :
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
                <View style={styles.registerBox}>
                  <Text style={styles.textStyles}>Brand</Text>
                  <Picker style={styles.dropdown}
                    onValueChange={value => this.onBrandSelect(value)}
                    selectedValue={this.state.brand}
                    value={this.state.brand}
                  >
                    <Picker.Item label="Please Select" value="" style={{color: 'gray'}}/>
                    {this.state.vehicle.map(item => {
                      return(
                        <Picker.Item key={item.brandId} label={item.brand} value={item.brand}/>
                      )
                    })}
                  </Picker>
                  <Text style={styles.textStyles}>CC.</Text>
                    <Picker style={styles.dropdown}
                      onValueChange={value => this.onTypeSelect(value)}
                      selectedValue={this.state.cc}
                      value={this.state.cc}
                      enabled={this.state.brand ? true : false}
                    >
                    <Picker.Item label={this.state.brand ? "Please Select" : "Please Select Brand"} value="" style={{color: 'gray'}}/>
                      {this.state.vehicle.filter(e => this.state.brand ? e.brand === this.state.brand : e)[0].type.sort((a, b) => a.type - b.type).map(item => {
                        return(
                          <Picker.Item key={item.typeId} label={item.type} value={item.type}/>
                        )
                      })}
                    </Picker>
                  <Text style={styles.textStyles}>Model</Text>
                    <Picker style={styles.dropdown}
                      onValueChange={value => {
                        this.setState({
                          model: value,
                          registerRequest: {...this.state.registerRequest, vehicle: this.state.modelLists.filter(e => e.model === value)[0].modelId}
                        })
                      }}
                      selectedValue={this.state.model}
                      value={this.state.model}
                      enabled={this.state.cc ? true : false}
                    >
                    <Picker.Item label={this.state.cc ? "Please Select" : "Please Select CC"} value="" style={{color: 'gray'}}/>
                      {this.state.modelLists.map(item => {
                        return (
                          <Picker.Item key={item.modelId} label={item.model} value={item.model}/>
                        )
                      })}
                    </Picker>
                  <Text style={styles.textStyles}>Year</Text>
                  <TextInput style={styles.input} maxLength={4} onChangeText={value => this.setState({
                    registerRequest: {...this.state.registerRequest, year: Number(value)}
                  })}/>
                </View>
                <TouchableHighlight onPress={() => this.navigationNext()} style={styles.buttonHighlight}>
                  <View style={styles.registerButton}>
                    <Text style={styles.textRegister}>Register</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </View>}
      </View >
  
    )
  }
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
  buttonHighlight: {
    position: 'absolute',
    bottom: 200,
    borderRadius: 10,
  },
  registerButton: {
    backgroundColor: "#18BCBE",
    width: 340,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
  },
  textRegister: {
    color: '#fff',
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10
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
  dropdown: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: 'black',
  }
})

export default RiderRegister