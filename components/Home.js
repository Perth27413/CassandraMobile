import React from 'react'
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import BackgroundTimer from 'react-native-background-timer'
import LottieView from 'lottie-react-native'
import Axios from 'axios'

const Home = ({ navigation }) => {
  var timer
  const [isLoading, setIsLoading] = React.useState(false)
  const [play, setPlay] = React.useState(
    {
      name: 'play',
      state: 0
    });
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [second, setsecond] = React.useState(0)
  const [dataList, setDataList] = React.useState({})
  const [userInfo, setUserInfo] = React.useState({})
  const [positionEntity, setPositionEntity] = React.useState({})
  const [vehicle, setVehicle] = React.useState({ brand: '', type: '', model: '' })
  var totalCarbon = (dataList.totalCarbon/1000).toFixed(2)
  var todayCarbon = (dataList.todayCarbon/1000).toFixed(2)
  var totalEarn = Number(dataList.totalEarn).toFixed(2)
  var todayEarn = Number(dataList.todayEarn).toFixed(2)

  const count = () => {
    setPlay({ ...play, ...{ name: !play.state ? 'pausecircle' : 'play', state: !play.state ? 1 : 0 } })
  }

  React.useEffect(() => {
    getHomeAPI()
  }, [])

  const getHomeAPI = () => {
    Axios.get(`https://fsk328moy9.execute-api.ap-southeast-1.amazonaws.com/dev/mobile/home?userId=1`).then(res => {
      let { positionEntity, vehicleEntity } = res.data.userInfo
      setDataList(res.data)
      setUserInfo(res.data.userInfo)
      setPositionEntity(positionEntity)
      setVehicle({ ...vehicleEntity, ...{ brand: vehicleEntity.brandEntity.brand, type: vehicleEntity.typeEntity.type, model: vehicleEntity.modelEntity.model } })
    }).catch(error => console.log(error))
  }

  React.useEffect(() => {
    if (play.state) {
      timer = BackgroundTimer.runBackgroundTimer(() => {
        setsecond(prevTime => prevTime + 1)
      }, 1000)
    } else {
      BackgroundTimer.stopBackgroundTimer(timer)
    }
  }, [play])

  React.useEffect(() => {
    if (second >= 60) {
      setMinutes(prev => prev + 1)
      setsecond(prevTime => prevTime = 0)
    }
  }, [second])

  React.useEffect(() => {
    if (minutes >= 60) {
      setHours(prev => prev + 1)
      setMinutes(0)
      setsecond(0)
    }
  }, [minutes])

  const navigationNext = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      navigation.navigate('detail')
    }, 2300);
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
        <View style={{flex: 1}}>
          <View style={styles.head} />
          <View style={styles.main}>
            <View style={styles.homeContainer}>
              <View style={styles.imageBox}>
                <Image style={styles.profileImage} source={{ uri: userInfo.profilePic }} />
              </View>
              <View style={styles.box}>
                <Text style={styles.name}>{userInfo.firstName}  {userInfo.lastName}</Text>
                <Text style={styles.position}>{positionEntity.position_name}</Text>
                <View style={styles.conMotorcycle}>
                  <Text style={styles.motorcycle}>{vehicle.brand} {vehicle.type} {vehicle.model}</Text>
                </View>
                <View style={styles.btnBox}>
                  <View style={styles.totalCarbon}>
                    <Text style={styles.textTopic}>Total Carbon</Text>
                    <Text style={styles.textVolume}>{totalCarbon}</Text>
                    <Text style={styles.textUnit}>kg</Text>
                  </View>
                  <View style={styles.totalEarn}>
                    <Text style={styles.textTopic}>Total Earn</Text>
                    <Text style={styles.textVolume}>{totalEarn}</Text>
                    <Text style={styles.textUnit}>Dollars</Text>
                  </View>
                  <View style={styles.todayCarbon}>
                    <Text style={styles.textTopic}>Today Carbon</Text>
                    <Text style={styles.textVolume}>{todayCarbon}</Text>
                    <Text style={styles.textUnit}>kg</Text>
                  </View>
                  <View style={styles.todayEarn}>
                    <Text style={styles.textTopic}>Today Earn</Text>
                    <Text style={styles.textVolume}>{todayEarn}</Text>
                    <Text style={styles.textUnit}>Dollars</Text>
                  </View>
                </View>
              </View>
              <TouchableHighlight onPress={() => count()} style={styles.buttonHighlight} underlayColor='#fff'>
                <Icon name={play.name} size={80} color="#18BCBE" style={styles.startStopButton} />
              </TouchableHighlight>
              <View style={styles.footer}>
                <View style={styles.iconHome}>
                  <Icon name='home' size={40} color="#18BCBE" style={{ textAlign: 'left' }} />
                </View>
                <View style={styles.textTime}>
                  <Text style={{ textAlign: 'center' }}>{hours} hr : {minutes} min : {second} s</Text>
                </View>
                <View style={styles.iconLocation}>
                  <Icon name='enviromento' size={40} color="#18BCBE" style={{ textAlign: 'right' }} onPress={() => navigationNext()} />
                </View>
              </View>
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
  homeContainer: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageBox: {
    zIndex: 1,
    position: 'absolute',
    top: 70,
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
    elevation: 2
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  box: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
    position: 'absolute',
    marginTop: 140,
    backgroundColor: '#ffffff',
    width: 350,
    height: 500,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.85,
    shadowRadius: 2,
    elevation: 1
  },
  name: {
    fontFamily: 'Roboto-Bold',
    marginTop: 65,
    fontWeight: 'bold',
    fontSize: 25,
  },
  position: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    marginTop: 1,
    fontSize: 16,
    color: '#67BE5A'
  },
  conMotorcycle: {
    marginTop: 12,
    width: 250,
    height: 35,
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#18BCBE'
  },
  motorcycle: {
    marginTop: 4,
    fontFamily: 'Roboto-Bold',
    fontSize: 19,
    color: 'black',
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 22,
    paddingTop: 5,
    width: '100%',
    // backgroundColor: 'red'
  },
  totalCarbon: {
    width: 145,
    height: '47%',
    backgroundColor: '#E85353',
    borderRadius: 5,
    marginBottom: 15,
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
  },
  totalEarn: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#FEBF45',
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
  },
  todayCarbon: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#3AB7FE',
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
  },
  todayEarn: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#27A35C',
    padding: 6,
    marginLeft: 1,
    marginRight: 1,
  },
  textTopic: {
    fontFamily: 'Roboto-Bold',
    fontSize: 17,
    color: '#fff',
    marginBottom: 10
  },
  textVolume: {
    fontFamily: 'Roboto-Bold',
    fontSize: 33,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10
  },
  textUnit: {
    fontFamily: 'Roboto-Bold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'right'
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    backgroundColor: '#fff',
    height: 60,
    borderTopWidth: 1.4,
    borderTopColor: '#C4C4C4',
    width: '100%',
    bottom: 0,
    paddingTop: 8,
    paddingLeft: 25,
    paddingRight: 25,
  },
  iconHome: {
    width: '20%',
  },
  textTime: {
    width: '60%',
    marginTop: 25,
    fontSize: 14,
  },
  iconLocation: {
    width: '20%',
  },
  startStopButton: {
    backgroundColor: '#fff',
    borderRadius: 80 / 2,
  },
  buttonHighlight: {
    zIndex: 1,
    position: 'absolute',
    borderRadius: 80 / 2,
    elevation: 2,
    bottom: 27,
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

export default Home