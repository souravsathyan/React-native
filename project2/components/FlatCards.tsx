import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatCards = () => {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards.</Text>
      <View style={styles.container}>
        <View style={[styles.cardOne, styles.cards]}>
            <Text >Red</Text>
        </View>
        <View style={[styles.cardOne, styles.cards]}>
            <Text >Red</Text>
        </View>
        <View style={[styles.cardOne, styles.cards]}>
            <Text >Red</Text>
        </View>
        
      </View>
    </View>
  )
}

export default FlatCards

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:10,
        paddingVertical:10
    },
    container:{
        display:'flex',
        flexDirection:"row",
        marginHorizontal:20,
    },
    cards:{
        flex:1,
        width:100,
        height:100,
        borderRadius:4,
        margin:9,
        justifyContent:'center',
        alignItems:'center'
    },
    cardOne:{
        backgroundColor:'#EF5354'
    }
})