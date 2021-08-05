import React from 'react'
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native'
import Axios from 'axios'

const Detail = () => {
  const [history, setHistory] = React.useState([])
  const [total, setTotal] = React.useState({})
  var totalCarbon = (total.totalCarbon / 1000).toFixed(2)
  var avgCarbon = (total.avgCarbon / 1000).toFixed(2)
  var h = Math.floor(total.totalTime / 3600)
  var m = Math.floor(total.totalTime % 3600 / 60)
  var s = Math.floor(total.totalTime % 3600 % 60)

  React.useEffect(() => {
    getDetailTotalAPI()
    getDetailAPI()
  }, [])

  const getDetailAPI = () => {
    Axios.get(`https://fsk328moy9.execute-api.ap-southeast-1.amazonaws.com/dev/mobile/history?userId=1`).then(res => {
      setHistory(res.data)
    }).catch(error => console.log(error))
  }

  const getDetailTotalAPI = () => {
    Axios.get(`https://fsk328moy9.execute-api.ap-southeast-1.amazonaws.com/dev/mobile/home?userId=1`).then(res => {
      setTotal(res.data)
    }).catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
      <View style={styles.head} />
      <View style={styles.main}>
        <View style={styles.Detail}>
          <Text style={styles.detailText}>Details</Text>
          <View style={styles.detailBox}>
            <View style={styles.textStyle}>
              <Text style={styles.totalCarbon}>Total Carbon</Text>
              <Text style={styles.valueCarbon}>{totalCarbon} kg</Text>
            </View>
            <View style={styles.textStyle}>
              <Text style={styles.avgCarbon}>AVG. Carbon</Text>
              <Text style={styles.valueAvg}>{avgCarbon} kg</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.textStyle}>
              <Text style={styles.totalTime}>Total Time</Text>
              <Text style={styles.valueTime}>{h > 0 ? h : 0} hr : {m > 0 ? m : 0} min : {s > 0 ? s : 0} s</Text>
            </View>
          </View>
          <Text style={styles.textUpdate}>Last update : เมื่อไม่นานมานี้ </Text>
          <SafeAreaView style={styles.areaView}>
            <FlatList
              style={styles.flatList}
              data={history.reverse()}
              renderItem={({ item, index }) => {
                return (
                  <View style={styles.carbonBox} key={index}>
                    <View style={styles.left}>
                      <Text style={styles.time}>{item.createdAt.slice(11, 16)}</Text>
                    </View>
                    <View style={styles.right}>
                      <View style={styles.carbonGram}>
                        <Text style={styles.numberCarbon}>{Number(item.carbonAmount).toFixed(2)}</Text>
                        <Text style={styles.gram}>gram</Text>
                      </View>
                      <View style={styles.verticleLine}></View>
                      <View style={styles.distance}>
                        <Text style={styles.kilo}>{Number(item.distanceTotal).toFixed(2)} km</Text>
                        <Text style={styles.minute}>{item.tripTime} minute</Text>
                      </View>
                    </View>
                  </View>
                )
              }}
              keyExtractor={item => item.key}
            />
          </SafeAreaView>
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
    height: '100%',
  },
  detailText: {
    fontFamily: 'Roboto-Bold',
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 40,
    marginLeft: 30
  },
  detailBox: {
    position: 'relative',
    width: 350,
    height: 160,
    backgroundColor: '#ffffff',
    top: 20,
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
    fontSize: 18,
    marginLeft: 20,
    marginTop: 15
  },
  valueCarbon: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginRight: 20,
    marginTop: 15
  },
  avgCarbon: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginLeft: 20,
  },
  valueAvg: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
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
    fontSize: 18,
    marginLeft: 20,
    top: 10
  },
  valueTime: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginRight: 20,
    top: 10
  },
  textUpdate: {
    color: '#FD7777',
    marginTop: 40,
    marginLeft: 218,
    fontSize: 13
  },
  carbonBox: {
    width: 350,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginLeft: 30,
    height: 65,
    top: 5
  },
  left: {
    width: '30%',
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
    width: '50%',
    marginLeft: 40
  },
  numberCarbon: {
    textAlign: 'center',
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
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1,
    backgroundColor: '#fff',
    width: '70%',
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
    backgroundColor: '#ccc',
    textAlign: 'center'
  },
  distance: {
    width: '50%',
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
  },
  areaView: {
    backgroundColor: '#f2f2f2',
    width: '100%',
    height: 450,
    paddingBottom: 5
  },
  flatList: {
    backgroundColor: '#f2f2f2'
  }
})

export default Detail