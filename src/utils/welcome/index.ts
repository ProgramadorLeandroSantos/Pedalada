import { Audio } from 'expo-av';
import {WelcomeSound} from '../../../assets'


const playWelcomeSound = async () =>{
    try {
      const { sound } = await Audio.Sound.createAsync(WelcomeSound);
      await sound.playAsync()
     
    } catch (error) {
      console.log(error)
    }finally{
      const { sound } = await Audio.Sound.createAsync(WelcomeSound);
      sound.unloadAsync()
    }
}

export default playWelcomeSound;