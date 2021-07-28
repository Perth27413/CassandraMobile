import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.imageBox}>
        <Image style={styles.profileImage} source={{uri: 'https://static.wikia.nocookie.net/marvelcinematicuniverse/images/5/52/Empire_March_Cover_IW_6_Textless.png/revision/latest?cb=20180325144529'}} />
      </View>
      <View style={styles.box}>
        <Text style={styles.name}>Thanos IEIE</Text>
        <Text style={styles.position}>Rider</Text>
        <Text style={styles.motorcycle}>Honda Wave 110i</Text>
        <View style={styles.btnBox}>
        <View style={styles.totalCarbon}><Text>tttttt</Text></View>
        <View style={styles.totalEarn}><Text>tttttt</Text></View>
        <View style={styles.todayCarbon}><Text>tttttt</Text></View>
        <View style={styles.todayEarn}><Text>tttttt</Text></View>
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
    marginTop: 85,
    fontSize: 20,
  },
  position: {
    marginTop: 5,
    fontSize: 15,
    color: '#67BE5A'
  },
  motorcycle: {
    fontFamily: 'Roboto-Bold',
    marginTop: 5,
    fontSize: 20,
  },
  btnBox: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 50,
    width: '100%',
    // backgroundColor: 'red'
  },
  totalCarbon: {
    width: 145,
    height: '47%',
    backgroundColor: '#E85353',
    borderRadius: 5,
    marginBottom: 15
  },
  totalEarn: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#FEBF45'
  },
  todayCarbon: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#3AB7FE'
  },
  todayEarn: {
    width: 145,
    height: '47%',
    borderRadius: 5,
    backgroundColor: '#27A35C'
  }
})

export default Home