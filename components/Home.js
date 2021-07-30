import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import BackgroundTimer from 'react-native-background-timer';

const Home = () => {
  var timer
  const [play, setPlay] = React.useState(
    {
      name: 'play',
      state: 0
    });
  const [hours, setHours] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)
  const [second, setsecond] = React.useState(0)

  React.useEffect(() => {

  }, [play.state, minutes])

  const count = () => {
    setPlay({ ...play, ...{ name: !play.state ? 'pausecircle' : 'play', state: !play.state ? 1 : 0}})
    
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

  return (
    <View style={styles.home}>
      <View style={styles.imageBox}>
        <Image style={styles.profileImage} source={{ uri: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/52/Empire_March_Cover_IW_6_Textless.png/revision/latest?cb=20180325144529' }} />
      </View>
      <View style={styles.box}>
        <Text style={styles.name}>Thanos Ieieie</Text>
        <Text style={styles.position}>Rider</Text>
        <Text style={styles.motorcycle}>Honda Wave 110i</Text>
        <View style={styles.btnBox}>
          <View style={styles.totalCarbon}>
            <Text style={styles.textTopic}>Total Carbon</Text>
            <Text style={styles.textVolume}>3000</Text>
            <Text style={styles.textUnit}>gram</Text>
          </View>
          <View style={styles.totalEarn}>
            <Text style={styles.textTopic}>Total Earn</Text>
            <Text style={styles.textVolume}>30</Text>
            <Text style={styles.textUnit}>Dollars</Text>
          </View>
          <View style={styles.todayCarbon}>
            <Text style={styles.textTopic}>Today Carbon</Text>
            <Text style={styles.textVolume}>3000</Text>
            <Text style={styles.textUnit}>gram</Text>
          </View>
          <View style={styles.todayEarn}>
            <Text style={styles.textTopic}>Today Earn</Text>
            <Text style={styles.textVolume}>1.2</Text>
            <Text style={styles.textUnit}>Dollars</Text>
          </View>
        </View>
      </View>
      <Icon name={play.name} size={80} color="#18BCBE" style={styles.startStopButton} onPress={() => {
        count()
      }}
      />
      <View style={styles.footer}>
        <View style={styles.iconHome}>
          <Icon name='home' size={40} color="#18BCBE" style={{ textAlign: 'left' }} />
        </View>
        <View style={styles.textTime}>
          <Text style={{ textAlign: 'center' }}>{hours} hours {minutes} minutes {second} seconds</Text>
        </View>
        <View style={styles.iconLocation}>
          <Icon name='enviromento' size={40} color="#18BCBE" style={{ textAlign: 'right' }} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  home: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageBox: {
    zIndex: 1,
    position: 'absolute',
    top: 75,
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    elevation: 2
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
  },
  box: {
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    zIndex: 0,
    position: 'absolute',
    marginTop: 150,
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
    marginTop: 85,
    fontWeight: 'bold',
    fontSize: 25,
  },
  position: {
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
    color: '#67BE5A'
  },
  motorcycle: {
    fontFamily: 'Roboto-Bold',
    marginTop: 10,
    fontSize: 19,
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 30,
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
    zIndex: 1,
    position: 'absolute',
    borderRadius: 80 / 2,
    elevation: 2,
    bottom: 27,
  }

})

export default Home