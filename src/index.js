
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
//import MenuX from './nav/menu'
import App from './app'
import Home from './home/Home'
import store from './iStore'

render(<Home store={store}/>, document.getElementById('root'));
