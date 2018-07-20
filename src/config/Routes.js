import React from 'react'
import { Router, Scene, Stack } from 'react-native-router-flux';
import Main from '../screen/Main';
import Home from '../screen/Home/Home';
import Add from '../screen/Add/Add';
import Registration from '../screen/Events/Registration';
import Event from '../screen/Events/Event';
import DetailEvent from '../screen/Events/DetailEvent';

const Routes = () => (
    <Router>
      <Stack key="root">
        <Scene key="main" component={Main} hideNavBar={true}/>
        <Scene key="home" component={Home} hideNavBar={true}/>        
        <Scene key="add" component={Add} hideNavBar={true}/>        
        <Scene key="register" component={Registration} hideNavBar={true}/>        
        <Scene key="event" component={Event} hideNavBar={true}/>        
        <Scene key="detailEvent" component={DetailEvent} hideNavBar={true}/>        
      </Stack>
    </Router>
  );

export default Routes;