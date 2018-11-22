import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, CardItem, Card } from '../common';
import SoundPlayer from 'react-native-sound';

var song = null; 

export class Illuminati extends Component {
constructor(){
  super()

  this.state = {
    pause: false
  };
}

componentWillMount() {
  song = new SoundPlayer('xFiles.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
    if(error)
      ToastAndroid.show('error when inititializing sound', ToastAndroid.SHORT);
  });
}
onPressBtnPlay() {
  if(song != null) {
    if(this.state.pause)
    song.play((success) => {
      if(!success)
      console.log('error when try to play that')
    });
    else song.pause();
    this.setState({pause: !this.state.pause});
  }
}

  render() {
    return (

       <CardItem style={{ backgroundColor: 'grey'}}>
        <Button onPress={this.onPressBtnPlay.bind(this)}>Press Dis</Button>
       </CardItem>
     
    );
  }
}

export default Illuminati;
