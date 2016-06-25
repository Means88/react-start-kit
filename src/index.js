import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ExampleComponent } from './components'
import { createStore } from 'redux'
import reducer from './redux/modules/reducer'
import configureStore from './redux/middleware/debugMiddleware'

let store = configureStore({});

render(
    <Provider store={store}>
        <ExampleComponent val="Click me"/>
    </Provider>,
    document.getElementById('main')
);
