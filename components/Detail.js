import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Detail = () => {
  const [carbon, setCarbon] = useState(500)
  const [test, setTest] = useState({
    numCarbon: 500,
    numKilo : 50,
    numTime : 13
  })
  return (
    <View style={styles.Detail}>
      <Text style={styles.detailText}>Details</Text>
      <View style={styles.detailBox}>
        <View style={styles.textStyle}>
          <Text style={styles.totalCarbon}>Total Carbon</Text>
          <Text style={styles.valueCarbon}>{carbon}</Text>
        </View>
        <View style={styles.textStyle}>
          <Text style={styles.avgCarbon}>AVG. Carbon</Text>
          <Text style={styles.valueAvg}>{carbon}</Text>
        </View>
        <View style={styles.line}></View>
        <View style={styles.textStyle}>
          <Text style={styles.totalTime}>Total Time</Text>
          <Text style={styles.valueTime}>{carbon}</Text>
        </View>
      </View>
      <Text style={styles.textUpdate}>Last update : เมื่อไม่นานมานี้ </Text>
      <View style={styles.carbonBox}>
        <View style={styles.left}>
          <Text style={styles.time}>13:00</Text>
        </View>
        <View style={styles.right}>
          <View style={styles.carbonGram}>
            <Text style={styles.numberCarbon}>500</Text>
            <Text style={styles.gram}>gram</Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.distance}>
            <Text style={styles.kilo}>50 km</Text>
            <Text style={styles.minute}>13 minute</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  detailText: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 30
  },
  detailBox: {
    position: 'relative',
    width: 350,
    height: 150,
    backgroundColor: '#ffffff',
    top: 80,
    left: 30,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    zIndex: 0
  },
  textStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  totalCarbon: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    marginTop: 10
  },
  valueCarbon: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
    marginTop: 10
  },
  avgCarbon: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
  },
  valueAvg: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
  },
  line: {
    borderBottomColor: '#c4c4c4',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  totalTime: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 20,
    top: 10
  },
  valueTime: {
    fontWeight: 'bold',
    color: 'black',
    marginRight: 20,
    top: 10
  },
  textUpdate: {
    color: 'red',
    marginTop: 100,
    marginLeft: 200,
    fontSize: 15
  },
  carbonBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 30,
    width: 350,
    height: 150,
    top: 5
  },
  left: {
    width: 70,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  time: {
    backgroundColor: '#FFCB65',
    color: '#fff',
    width: '100%',
    height: 50,
    fontWeight: 'bold',
    fontSize: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 0
  },
  carbonGram: {
    marginLeft: 40
  },
  numberCarbon: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  gram: {
    fontSize: 10,
    fontWeight: 'bold',
    bottom: 5,
    textAlign: 'right'
  },
  right: {
    flexDirection: 'row',
    flex: 3,
    backgroundColor: '#fff',
    width: 280,
    height: 50,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 10
    },
    shadowOpacity: 1,
    elevation: 3,
    zIndex: 0,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5
  },
  verticleLine: {
    marginTop: 5,
    marginLeft: 5,
    height: '80%',
    width: 1,
    backgroundColor: '#ccc'
  },
  distance: {
    marginLeft: 10,
    marginTop: 10
  },
  kilo: {
    fontSize: 12,
    fontWeight: 'bold'
  },
  minute: {
    fontSize: 12,
    fontWeight: 'bold'
  }
})

export default Detail