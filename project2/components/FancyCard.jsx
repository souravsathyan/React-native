import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const FancyCard = () => {

  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://images.pexels.com/photos/247600/pexels-photo-247600.jpeg?cs=srgb&dl=pexels-pixabay-247600.jpg&fm=jpg',
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Blue Lake</Text>
          <Text style={styles.cardLabel}>Lorem ipsum, dolor sit</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem.
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize:24,
    fontWeight:'bold',
    paddingHorizontal:8
  },
  card: {
    width:360,
    height:360,
    borderRadius:6,
    marginVertical:12,
    marginHorizontal:16
  },
  cardElevated: {
    backgroundColor:'white',
    elevation:3,
    shadowOffset:{
        height:1,
        width:1
    },
    borderRadius:6

  },
  cardImage: {
    height: 180,
    marginBottom:8
  },
  cardBody: {
    padding:10
  },
  cardTitle: {
    color:"#000000",

  },
  cardLabel: {
    color:"#000000",
  },
  cardDescription: {
    color:"#000000",
  },
  cardFooter:{
    color:"#000000",
  }
});
