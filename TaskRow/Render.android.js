import React from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Image,
  Animated
} from 'react-native';

export default function render(styles){
  const doneAnimation = new Animated.ValueXY();

     const localStyle = StyleSheet.create({
         doneButton: {
             borderRadius: 5,
             padding: 5,
         },
         row: {
             transform: doneAnimation.getTranslateTransform(),
         },
     });

     doneAnimation.addListener((args) => {
         if (args.x === -500) {
             this.onDonePressed();
         }
     });

     function animatedPress() {
         Animated.spring(doneAnimation, {
             tension: 2,
             friction: 3,
             toValue: {
                 x: -500,
                 y: 0,
             },
         }).start();
     }

     return (
         <Animated.View style={[styles.container, localStyle.row]}>
             <Text
                 style={styles.label}
             >{this.props.todo.task}</Text>

             <TouchableHighlight
                 onPress={animatedPress.bind(this)}
                 style={localStyle.doneButton}
                 underlayColor="#ddd"
             >
                 <Image
                     source={require('../images/done.png')}
                 />
             </TouchableHighlight>
         </Animated.View>
     );
}