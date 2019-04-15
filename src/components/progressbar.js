import React, {Component} from 'react';
import {StyleSheet,View, Text, TouchableOpacity, ImageBackground,Image, Dimensions} from 'react-native';
import PropTypes from 'prop-types'
import helpers from '../utils/helpers';
let deviceWidth = Dimensions.get('window').width


class ProgressBar extends Component {
    static propTypes = {
        text: PropTypes.string,
        backgroundColor:PropTypes.string,
        width:PropTypes.number,
        value:PropTypes.number,
    }
    static defaultProps = {
        text:"Loading ...",
        backgroundColor:"rgba(56, 2011, 160, 0.5)",
        width: deviceWidth - (deviceWidth * .083),
        value:.7
    }
    
    constructor(props) {
        super(props);
        this._bgColor = this.props.backgroundColor
        this._text = this.props.text
        this._width =  this.props.width
        this._fullBar = this._width - (this._width * .083)
        this._value = this.props.value >= 1 ? this._fullBar  : this.props.value * this._fullBar
    }


  render() {
    return (
  
        <View style={{marginTop:5}}>
            <ImageBackground
                style={{
                    width: this._width - (this._width * .033), 
                    height:((this._width - (this._width * .033)) * .09),
                    justifyContent: 'center',
                    
                    }}
                source={require('../assets/UImages/item_0008_Bg.png')}
            >
            <View style={{
                position:'absolute',
                width: this._value ,
                height:((this._width - (this._width * .083)) * .05),
                backgroundColor:'blue',
                borderRadius:8,
                marginLeft:this._width * 0.025,
                backgroundColor: this._bgColor,
                 }} />
                 
            <Text style={[styles.progressTxt,{fontSize:13}]}>{this._text}</Text>

            </ImageBackground>
        </View>
    
    );
  }
}



const styles = StyleSheet.create({

    progressTxt:{
        
        fontFamily:"CarterOne",
        color:'#FFF',
        alignSelf: 'center',
    }
});
export { ProgressBar }