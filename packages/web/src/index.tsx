import React from 'react';
import App from './App';
import { AppRegistry } from 'react-native'
import './base.css';

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('root') });
