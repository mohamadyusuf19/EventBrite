import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import Main from '../screen/Main';

const Routes = () => (
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} hideNavBar={true}/>        
      </Stack>
    </Router>
  );

export default Routes;