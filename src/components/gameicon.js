
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image, Animated} from 'react-native';
import PropTypes from 'prop-types'
import helpers from '../utils/helpers';



class GameIcon extends Component {
    static propTypes = {
        small: PropTypes.bool,
        name: PropTypes.string
    }
    static defaultProps = {
        small:false,
        name:"play"
    }
    
    constructor(props) {
        super(props);
        this._getSize = this.props.small
        this._bgColor = this.props.backgroundColor
        this._getIconPath = helpers.getIconPath(this.props.name);
        
    }

  render() {
    return (
    
        <Animated.Image 
            style={{
                width:this._getSize ? 40 : 64, 
                height:this._getSize ? 40 : 64}}
            source={this._getIconPath} />
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
  }  
});
export { GameIcon }