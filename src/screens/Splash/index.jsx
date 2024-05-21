import { ResizeMode, Video } from 'expo-av';

import { StyleSheet } from 'react-native';

export default function Splash({isLoaded}) {
  return (
    <>
        <Video
            style={StyleSheet.absoluteFill}  
            source={require('../../../assets/icons/animated-splash.mp4')}
            resizeMode={ResizeMode.COVER}
            isLooping={false}
            shouldPlay={true} 
        />
    </>
  )
}   