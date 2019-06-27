import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export  default class App extends React.Component {
  
  constructor(props){
    super(props);
   // this.handleClick = this.handleClick.bind(this);

  }
  handleClick () {
    Alert.alert("testing alert check");
  }
  render(){
  return (
      <View style={s.mainContainer}>
        <View style={s.header}>
        <View style={s.proPicHolder}>
          <Text style={s.proPic}> Picture </Text>
        </View>
        </View>
        <View style={s.subHeader}>
          <Text style={{fontSize:40, fontWeight: "bold",color: "black"}}> sgdjsjgdksgdkgn.m</Text>
          <Text style={{fontSize: 30, fontWeight: "normal",color: "black"}}>ssgshshwrhwhsg </Text>
        </View>
        <View style={s.details}>
          <View style={s.detailsLeftRow}>
            <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Left 1</Text>
            <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Left 1</Text>
            <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Left 1</Text>
          
          </View>
          <View style={s.detailsRightRow}>
          <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Right 1</Text>
          <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Right 1</Text>
          <Text style={{fontSize:20, fontWeight: "normal",color: "black"}}> Right 1</Text>
          </View>
        </View>
      </View>
  );
  }
}
const s = StyleSheet.create({
  mainContainer: {flex:1, flexDirection: "column", alignItems: "stretch", justifyContent: "flex-start", marginTop:20},
  header: {flex: 2,alignItems:"stretch",justifyContent:"center"},
  subHeader: {flex:1,alignItems:"center"},
  details: {flex: 3,alignItems:"stretch",flexDirection:"row"},
  detailsLeftRow: {flex:1,alignItems:"center",justifyContent:"space-around",flexDirection:"column"},
  detailsRightRow: {flex:1,alignItems:"center",justifyContent:"space-around",flexDirection:"column"},
  proPic: { fontSize: 20,alignSelf:"center",justifyContent: "center"},
  proPicHolder: {alignSelf:"center",justifyContent:"center",width: 100, height: 100, borderRadius: 50,backgroundColor: "grey"}
});
const styles = StyleSheet.create({
  container: {flexDirection: 'row',
  padding: 20,
  backgroundColor:'yellow',
alignItems: 'center',
    justifyContent: 'center',
  },
  container1:{
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
});

// <View>
//       <Text style={
//         styles_dark.textView
//         }>sdgsgdsgsh</Text>
//       <View style={
//         styles_dark.fancyBox
//       }></View>
//       <View style={
//         styles_dark.fancyBox2
//       }></View>
//       <View style={
//         styles_dark.fancyBox3
//       }></View>
//     </View>


