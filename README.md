# React Native Game UI

![gameui](http://thundercatsum.com/gameui.png)

I don't know why I did this probably I just got nothing to do. This is a game UI library for react native, all components (mens only 4) have been tasted on iOS. I am currently working on all Android features. Write me a [tweet](https://twitter.com/home) if you'd like to help me, I 'd like to add more features.


## Installation

1. Run npm command

```bash
npm install react-native-gameui --save
```


2. Link dependencies (this is important)

```bash
react-native link
```

## Usage

```javascript
import { GameButton, IconButton, GameIcon, ProgressBar } from 'react-native-gameui';
export default class App extends Component {
  render() {
    return (
  
        <View style={styles.container}>

          <GameButton />
          <IconButton />
          <GameIcon />
          <ProgressBar />

        </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#f5f5f5',
  
  },
});

```

## Components

GameButton
 
| Props           | type   | default   |
|-----------------|--------|-----------|
| text            | String | "Play"    |
| size            | String | "large"   |
| iconName        | String | null      |
| fontSize        | number | 32        |
| backgroundColor | string | "#6BCFA4" |

IconButton

| Props           | type   | default   |
|-----------------|--------|-----------|
| small           | bool   | false     |
| name            | String | "play"    |
| backgroundColor | string | "#20B2AA" |

GameIcon

| Props | type   | default |
|-------|--------|---------|
| small | bool   | false   |
| name  | String | "play"  |

ProgressBar

| Props           | type        | default                    |
|-----------------|-------------|----------------------------|
| text            | String      | "Loading"                  |
| width           | number      | Device Width               |
| value           | number(0-1) | 0.7                        |
| backgroundColor | String      | "rgba(56, 2011, 160, 0.5)" |

## Documentation

[More documantion](http://thundercatsum.com/gameui)

## License
I don't know but obvioulsy it is free! 

## Contact
Twitter: [@cbastin0](https://twitter.com/cbastian0) 