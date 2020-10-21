import React,{useRef, useState, useEffect} from 'react'
import styled from 'styled-components'
import {View} from 'react-native'
import { Audio, Video } from 'expo-av';
import GoogleCast, { CastButton } from 'react-native-google-cast'
import Orientation from 'react-native-orientation';
import {Dimensions, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import {Progress} from './Progress'
const Container = styled.View`
flex: ${props=> props.fullscreen ? 1 : 3};
justify-content:center;
/* border:1px solid white; */
`

const BottomContainer = styled.View`
flex: ${props => !props.fullscreen ? 1 : 0};
`

const ControlContainer = styled.View`
flex: 1;
max-height: 100px;
/* border:1px solid lime; */
display: ${props=> !props.fullscreen ? 'flex' : 'none'};
`

const Touchable = styled.TouchableOpacity`
align-self: center;
margin: auto 0;
`

const StyledIcon = styled(Icon)`
font-size:40px;
color: white;
`

const FullScreenTouchable = styled.TouchableOpacity`
height: 40px;
width: 80px;
border-radius: 8px;
background-color:${props=> props.theme.colors.primary};
/* border:1px solid red; */
`

const FullScreenTouchableText = styled.Text`
font-size:10px;
color: white;
margin: auto 0;
text-align: center;
`




const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#FFF8ED";
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const RATE_SCALE = 3.0;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 6.0 - FONT_SIZE * 2;

export const VideoPlayer = props => {
let playbackInstance = null
const [playbackState, setPlaybackState] = useState(null)

    useEffect(()=>{
        registerListeners()
    },[])

  useEffect(()=>{
    console.log("playback instance??",playbackInstance)
  },[playbackInstance])

const  registerListeners = () => {
    const events = `
      SESSION_STARTING SESSION_STARTED SESSION_START_FAILED SESSION_SUSPENDED
      SESSION_RESUMING SESSION_RESUMED SESSION_ENDING SESSION_ENDED
      MEDIA_STATUS_UPDATED MEDIA_PLAYBACK_STARTED MEDIA_PLAYBACK_ENDED MEDIA_PROGRESS_UPDATED
      CHANNEL_CONNECTED CHANNEL_DISCONNECTED CHANNEL_MESSAGE_RECEIVED
    `.trim().split(/\s+/)

    events.forEach(event => {
      GoogleCast.EventEmitter.addListener(GoogleCast[event], function() {
        console.log("important",event, arguments)
      })
    })
}
  


  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'readyForPlay':
            return {
                ...prevState,
                isLoading: false,
                showVideo: true,
                playbackInstanceDuration: action.playbackInstanceDuration
            }
        case 'updatePlayback':
            return{
                ...prevState,
                isPlaying: action.isPlaying,
                muted: action.isMuted,
                playbackInstancePosition: action.playbackInstancePosition
            }
        case 'fullScreen':
            return {
                ...prevState,
                videoHeight: action.height,
                videoWidth: action.width,
                fullscreen: action.fullscreen
            }
      }
    },{

showVideo: false,
  muted: false,
  playbackInstancePosition: null,
  playbackInstanceDuration: null,
  shouldPlay: false,
  isPlaying: false,
  isBuffering: false,
  isLoading: true,
  fontLoaded: false,
  shouldCorrectPitch: true,
  volume: 1.0,
  rate: 1.0,
  videoWidth: DEVICE_WIDTH,
  videoHeight: VIDEO_CONTAINER_HEIGHT,
  fullscreen: false,

    })

    useEffect(()=>{
        console.log("anything here?", state.playbackInstanceDuration)
        console.log("anything here?", state.playbackInstancePosition)
        console.log("IMPORTANT",state.playbackInstanceDuration - (state.playbackInstanceDuration - state.playbackInstancePosition) / 1000)
      },[state.playbackInstanceDuration,state.playbackInstancePosition])

    const updatePlaybackState = (newPlaybackState) => {
        if (playbackState !== newPlaybackState) {
          const { debug } = props
          debug &&
            console.info(
              '[playback]',
              playbackState,
              ' -> ',
              newPlaybackState,
              ' [seek] ',
              seekState,
              ' [shouldPlay] ',
              shouldPlay
            )
          setPlaybackState(newPlaybackState)
          setLastPlaybackStateUpdate(Date.now())
        }
      }

      const _onPlayPausePressed = () => {
          console.log("HERE")
        if (playbackInstance != null) {
          if (state.isPlaying) {
            playbackInstance.pauseAsync();
          } else {
            playbackInstance.playAsync();

          }
        }
      };
       const _onPlaybackStatusUpdate = e => {
           console.log("anything",{e})
           dispatch({type:'updatePlayback', isPlaying: e.isPlaying, isMuted: e.isMuted, playbackInstancePosition:Math.round(e.positionMillis /1000)})
       }

       const _onReadyForDisplay = e => {
           console.log("anything returned", e.status.durationMillis)
           dispatch({type: 'readyForPlay', playbackInstanceDuration: Math.round(e.status.durationMillis /1000)  })
          //  playbackInstance.presentFullscreenPlayer()
       }

      const _onFullscreenUpdate = event => {
        console.log(
          `FULLSCREEN UPDATE : ${JSON.stringify(event.fullscreenUpdate)}`
        );
      };

      const _onLoadStart = () => {
        console.log(`ON LOAD START`);
      };
    
      const _onLoad = status => {
        console.log(`ON LOAD : ${JSON.stringify(status)}`);
      };
    
      const _onError = error => {
        console.log(`ON ERROR : ${error}`);
      };

   const setFullScreen = () => {
     playbackInstance.presentFullscreenPlayer()
      //  dispatch({type: 'fullScreen', height: DEVICE_HEIGHT, width: DEVICE_WIDTH, fullscreen: true})
       Orientation.lockToLandscape()
   }

    return (
        <>
        <Container fullscreen={state.fullscreen}>
            <Video
            source={{uri: "https://boaltcodingchallenge.s3-us-west-1.amazonaws.com/Countdown+To+Rocket+Launching.mp4"}}
            ref={ref =>{
                playbackInstance = ref
            }}
            style={[
              {
                opacity: state.showVideo ? 1.0 : 0.2,
                width: state.videoWidth,
                height: state.videoHeight
              }
            ]}
            resizeMode={!state.fullscreen ? Video.RESIZE_MODE_CONTAIN : Video.RESIZE_MODE_COVER}
            onPlaybackStatusUpdate={_onPlaybackStatusUpdate}
            onLoadStart={_onLoadStart}
            onLoad={_onLoad}
            onError={_onError}
            onFullscreenUpdate={_onFullscreenUpdate}
            onReadyForDisplay={_onReadyForDisplay}
            useNativeControls={state.useNativeControls}
            Orientation={state.fullscreen ? 'landscape' : 'portrait'}
          />
          <CastButton style={{ width: 24, height: 24, borderColor:'red', borderWidth:1 }} />
        </Container>
          <BottomContainer fullscreen={state.fullscreen}  style={{flex:1, justifyContent:'flex-end'}}>
          {/* <Progress
          duration={state.playbackInstanceDuration}
          progress={state.isPlaying ? state.playbackInstanceDuration - (state.playbackInstanceDuration - state.playbackInstancePosition) : 0}
          color={'white'}
        /> */}
          <ControlContainer fullscreen={state.fullscreen}>
              <Touchable onPress={()=> _onPlayPausePressed()}>
                <StyledIcon name={state.isPlaying ? "pause": "play"}/>
              </Touchable>
              <FullScreenTouchable
              onPress={()=> setFullScreen()} 
              style={{
                  position:'absolute',
                  right:20,
                  top: '30%'
              }}>
              <FullScreenTouchableText>
                FullScreen
              </FullScreenTouchableText>
              </FullScreenTouchable>
          </ControlContainer>
          </BottomContainer>
          </>
    )
}

const styles = StyleSheet.create({
    video: {
        maxWidth: DEVICE_WIDTH,
        marginVertical: 'auto'
      }
})