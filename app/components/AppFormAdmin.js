import React, { useRef, useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Animated,
  Dimensions,
  Image
} from 'react-native';

import FormHeader from './FormHeader';
import FormSelectorBtn from './FormSelectorBtn';
import SignupFormAdmin from './SignUpFormAdmin';
import LoginFormAdmin from './LoginFormAdmin';

const { width } = Dimensions.get('window');

export default function AppFormAdmin({ navigation }) {
  const animation = useRef(new Animated.Value(0)).current;
  const scrollView = useRef();

  const rightHeaderOpacity = animation.interpolate({
    inputRange: [0, width],
    outputRange: [1, 0],
  });

  const leftHeaderTranslateX = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, 40],
  });
  const rightHeaderTranslateY = animation.interpolate({
    inputRange: [0, width],
    outputRange: [0, -20],
  });
  const loginColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange:  ['#4FA5AC', '#CBE9E7'],
  });
  const signupColorInterpolate = animation.interpolate({
    inputRange: [0, width],
    outputRange:  ['#CBE9E7', '#4FA5AC'],
  });



  return (
    <View >
   
    <View style={{ flex: 1, paddingTop: 320 }}>
      
    <Image
                source={require('../../assets/logosih.png')}
                 style={styles.imgis}
              />


    
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginBottom: 20,
        }}
      >
        <FormSelectorBtn
          style={styles.borderLeft}
          backgroundColor={loginColorInterpolate}
          title='Login As Admin'
          onPress={() => scrollView.current.scrollTo({ x: 0 })}
        />
        <FormSelectorBtn
          style={styles.borderRight}
          backgroundColor={signupColorInterpolate}
          title='Sign up as Admin'
          onPress={() => scrollView.current.scrollTo({ x: width })}
        />
      </View>
      <ScrollView
        ref={scrollView}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: animation } } }],
          { useNativeDriver: false }
        )}
      >
        <LoginFormAdmin navigation={navigation} />
        <ScrollView>
          <SignupFormAdmin navigation={navigation} />
        </ScrollView>
      </ScrollView>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00a69c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderLeft: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  borderRight: {
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  imgis:{
    height: 425, 
    width: 420,
    position:"absolute",
    margin: 20,
    marginTop:-300 
  }
});