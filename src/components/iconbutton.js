
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import PropTypes from 'prop-types'
import helpers from '../utils/helpers';



class IconButton extends Component {
    static propTypes = {
        small: PropTypes.bool,
        name: PropTypes.string,
        backgroundColor:PropTypes.string
    }
    static defaultProps = {
        small:false,
        name:"play",
        backgroundColor:"#20B2AA",
    }
    
    
    constructor(props) {
        super(props);
        this._getSize = this.props.small
        this._bgColor = this.props.backgroundColor
        this._getImagePath = helpers.getImageIconPath(this.props.name);
        this._disabled = this.props.disabled
        
    }
   

  render() {
    return (
    <TouchableOpacity 
    style={[
        styles.button,
        {
            backgroundColor:this._disabled ? "#CCC" : this._bgColor, 
            width:this._getSize ? 50 : 72, 
            height:this._getSize ? 50 : 72,
            borderWidth:this._getSize ? 3 : 4,
            borderRadius:this._getSize ? 25 : 36 }
        ]}
    onPress={this.props.onPress}
    disabled={this.props.disabled}
    >
        <Image 
            style={{
                width:this._getSize ? 44 : 64, 
                height:this._getSize ? 44 : 64}}
            source={this._getImagePath}>
        </Image>
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

  button:{      
    margin:2,
      borderColor:'#FFF',
  }  
});
export { IconButton }