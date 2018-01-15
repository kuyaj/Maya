
import React from 'react'
import { render } from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import MenuX from './nav/menu'
import App from './app'
import store from './iStore'

const Maya = () => 
    <div>
        <App/>
    </div>

render(<Maya store={store}/>, document.getElementById('root'));
