import React, { useState } from 'react';
import { useEffect } from 'react';
import Routes from './src/Routes';
import Splash from './src/screens/Splash';
import { View } from 'react-native';
import react from "react";


export default function App() {

  const [isLoading, setIsLoading] = useState(true);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);

    if (seconds >= 7) {
      clearInterval(interval);
      setIsLoading(false);
    }

    return () => clearInterval(interval)
  }, [seconds]);
  return (
    <View style={{ flex: 1, backgroundColor: '#2b2d42' }}>
      {isLoading ? <Splash /> : <Routes />}
    </View>

  );
}
