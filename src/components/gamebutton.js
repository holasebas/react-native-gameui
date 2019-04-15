import React, {Component} from 'react';
import {StyleSheet,Text, TouchableOpacity, ImageBackground,Image} from 'react-native';
import PropTypes from 'prop-types'
import helpers from '../utils/helpers';

class GameButton extends Component {
    static propTypes = {
        text: PropTypes.string,
        size: PropTypes.string,
        iconName: PropTypes.string,
        fontSize:PropTypes.number,
        backgroundColor:PropTypes.string
    }
    static defaultProps = {
        text:"Play",
        size:"large",
        iconName:null,
        backgroundColor:"#6BCFA4",
        fontSize:32
    }
    
    constructor(props) {
        super(props);

        this._getSize = this.getSize()
        this._bgColor = this.props.backgroundColor
        this._buttomText = this.props.text
        this._fontSize = this.props.fontSize
        this._disabled = this.props.disabled
        this._iconName = this.props.iconName
        this._iconPath = helpers.getIconPath(this._iconName)
    }

    getSize(){
        var buttom = {}
        var disabledIcon={}
        var contentIcon={}
        switch (this.props.size) {
            case "large":
            contentIcon={
                width:42, 
                height:42,
                left:20, 
                top:5}
            disabledIcon={
                    width:45, 
                    height:45,
                    left:-10, 
                    top:-10}
            buttom ={
                    width:320, 
                    height:65,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:28,
                    borderBottomLeftRadius:24,
                    borderBottomRightRadius:24,
                    borderWidth:5}
                break;
            case "medium":
            contentIcon={
                width:30, 
                height:30,
                left:10, 
                top:2}
            disabledIcon={
                width:30, 
                height:30,
                left:-7, 
                top:-7}
            buttom ={
                    width:220, 
                    height:45,
                    borderTopLeftRadius:22,
                    borderTopRightRadius:25,
                    borderBottomLeftRadius:16,
                    borderBottomRightRadius:16,
                    borderWidth:4}
                break;
            case "small":
            contentIcon={
                width:40, 
                height:40,
                left:5, 
                top:-5}
            disabledIcon={
                width:20, 
                height:20,
                left:-3, top:-3}
            buttom ={
                    borderColor:'#FFF',
                    width:160, 
                    height:34,
                    borderTopLeftRadius:20,
                    borderTopRightRadius:20,
                    borderBottomLeftRadius:12,
                    borderBottomRightRadius:12,
                    borderWidth:3,}
                break;
            default:
            contentIcon={
                width:40, 
                height:40,
                left:20, 
                top:5}
            disabledIcon={
                    width:45, 
                    height:45,
                    left:-10, 
                    top:-10}
            buttom ={
                    width:320, 
                    height:65,
                    borderTopLeftRadius:30,
                    borderTopRightRadius:28,
                    borderBottomLeftRadius:24,
                    borderBottomRightRadius:24,
                    borderWidth:5}
                break;
        }
        var responde = {"buttom":buttom, "disabledIcon":disabledIcon, "contentIcon":contentIcon}
        return responde;
    }


    
   


  render() {
    return (
    <TouchableOpacity 
    style={[styles.buttom,this._getSize.buttom,{backgroundColor:this._disabled ? "#CCC" : this._bgColor}]}
    onPress={this.props.onPress}
    disabled={this.props.disabled}
    >
        
        <ImageBackground
            style={styles.buttonBG}
            source={require('../assets/UImages/btn2.png')}
        >
           <Text style={[styles.buttomTxt,{fontSize:this._fontSize}]}>{this._buttomText}</Text>

           {this._iconName && !this._disabled ? 
           <Image 
           style={[this._getSize.contentIcon,{position:'absolute'}]} 
           source={this._iconPath}/>
           : null}

           {this._disabled ? 
            <Image style={[this._getSize.disabledIcon,{position:'absolute'}]} source={require('../assets/UIcons/locker.png')}/>
           : null} 

        </ImageBackground>
    </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonBG:{
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'  
  },
  buttom:{
    margin:2,
    borderColor:'#FFF',
    },
    buttomTxt:{
        fontFamily:"CarterOne",
        color:'#FFF'
    }
});
export { GameButton } 