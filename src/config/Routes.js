import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import Main from '../screen/Main';
import Home from '../screen/Home/Home';
import Add from '../screen/Add/Add';

const Routes = () => (
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} hideNavBar={true}/>
        <Scene key="home" component={Home} hideNavBar={true}/>        
        <Scene key="add" component={Add} hideNavBar={true}/>        
      </Stack>
    </Router>
  );

export default Routes;